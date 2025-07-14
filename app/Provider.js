"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function Provider({ children }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

export default Provider;
