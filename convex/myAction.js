import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { action } from "./_generated/server.js";
import { v } from "convex/values";
import { stringify } from "querystring";

export const ingest = action({
  args: {
    splitText: v.any(), // array
    fileId: v.string(), // string
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "Missing GOOGLE_GEMINI_AI_API_KEY in environment variables"
      );
    }

    await ConvexVectorStore.fromTexts(
      args.splitText,
      args.fileId,
      new GoogleGenerativeAIEmbeddings({
        apiKey,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );

    return "completed";
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "Missing GOOGLE_GEMINI_AI_API_KEY in environment variables"
      );
    }
    const vectorStore = new ConvexVectorStore.fromTexts(
      new GoogleGenerativeAIEmbeddings({
        apiKey,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );

    const resultOne = (await vectorStore.similaritySearch(args.query, 1)).filter(q=>q.metadaata.fileId==args.fileId);
    console.log(resultOne);
    return JSON.stringify(resultOne)
  },
});
