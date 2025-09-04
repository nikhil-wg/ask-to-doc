"use client";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

function Provider({ children }) {
  return (
    <ConvexProvider client={convex}>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        }}
      >
        {children}
      </PayPalScriptProvider>
    </ConvexProvider>
  );
}

export default Provider;
