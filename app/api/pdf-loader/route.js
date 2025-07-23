import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Document } from "langchain/document";
const fileUrl =
  "https://first-chinchilla-293.convex.cloud/api/storage/681209ec-2bab-493d-988c-c4aa2a1aa969";

export async function GET(req) {
  //1. Load the file
  const response = await fetch(fileUrl);
  const data = await response.blob();
  const loader = new WebPDFLoader(data);
  const docs = await loader.load();
  
  let pdfTextContent = "";
  docs.forEach((doc) => {
    pdfTextContent = pdfTextContent + doc.pageContent;
  });
  // 2. text splitting
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });
  const output = await splitter.createDocuments([pdfTextContent]);
  let splitterList=[];
  output.forEach(doc => {
    splitterList.push(doc.pageContent)
  });

  return NextResponse.json({ result: splitterList });
}
