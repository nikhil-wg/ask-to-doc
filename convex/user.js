import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    email: v.string(),
    userName: v.string(),
    imgURL: v.string(),
  },
  handler: async (ctx, args) => {
    //if user already exist
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    //if user not exist.... then add new user
    if (user?.length == 0) {
      await ctx.db.insert("users", {
        email: args.email,
        userName: args.userName,
        imgURL: args.imgURL,
        upgrade: false,
      });
      return "New user is inserted";
    }
    return "User is Already exists";
  },
});

export const userUpgradePlan = mutation({
  args: {
    useEmail: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.useEmail))
      .collect();
    if (result) {
      await ctx.db.patch(result[0]._id, { upgrade: true });
      return 'success'
    }
    return "not able to update"
  },
});

export const GetUserInfo= query({
args: {
    useEmail: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if(!args.useEmail){
      return ;
    }
    const result = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args?.useEmail))
      .collect();
    
    return result[0];
}})