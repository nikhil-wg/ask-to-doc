import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { action } from "./_generated/server.js";
import { v } from "convex/values";

const apiKey = process.env.GOOGLE_GEMINI_AI_API_KEY;

if (!apiKey) {
  throw new Error(
    "❌ Missing GOOGLE_GEMINI_AI_API_KEY in environment variables."
  );
}

export const ingest = action({
  args: {
    splitText: v.any(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("✅ Ingesting data...");

    await ConvexVectorStore.fromTexts(
      args.splitText,
      { fileId: args.fileId },
      new GoogleGenerativeAIEmbeddings({
        apiKey,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );

    return "✅ Ingestion completed";
  },
});

export const search = action({
  args: {
    query: v.string(),
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("🔍 Performing vector search...");
    console.log("Query:", args.query);
    console.log("FileId filter:", args.fileId);

    const vectorStore = new ConvexVectorStore(
      new GoogleGenerativeAIEmbeddings({
        apiKey,
        model: "text-embedding-004",
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx }
    );

    // Run similarity search
    const searchResults = await vectorStore.similaritySearch(args.query, 5);

    // Filter only if metadata.fileId exists
    const results = searchResults.filter(
      (r) => r.metadata?.fileId === args.fileId
    );

    console.log("Filtered vector search result:", results);

    return JSON.stringify(results);
  },
});
