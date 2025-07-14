import { mutation } from "./_generated/server";
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
      });
      return "New user is inserted";
    }
    return "User is Already exists";
  },
});
