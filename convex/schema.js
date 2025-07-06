// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userName: v.string(),
    email: v.string(),
    imgURL: v.string(),
  }),
  pdfFiles: defineSchema({
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    userEmail: v.string(),
  }),
});
