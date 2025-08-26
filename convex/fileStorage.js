import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const AddFileEnteryToDb = mutation({
  args: {
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    fileUrl: v.string(),
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("pdfFiles", {
      fileId: args.fileId,
      storageId: args.storageId,
      fileName: args.fileName,
      fileUrl: args.fileUrl,
      createdBy: args.createdBy,
    });
    console.log("inserted pdfdata");
    return "Inserted";
  },
});

export const getFileUrl = mutation({
  args: {
    storageId: v.string(),
  },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  },
});

export const GetFileRecord = query({
  args: {
    fileId: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("pdfFiles")
      .filter((q) => q.eq(q.field("fileId"), args.fileId))
      .collect();
    console.log("backend", result);
    return result[0];
  },
});

export const GetUserFiles = query({
  args: {
    userEmail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (!args.userEmail) {
      return
    }
    const result = await ctx.db
      .query("pdfFiles")
      .filter((q) => q.eq(q.field('createdBy'), args.userEmail))
      .collect();
    console.log("file listing", result);
    return result;
  },
});
