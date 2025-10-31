import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "../config/env.js"; // ✅ correct import (named export)

// Initialize Arcjet
const aj = arcjet({
  key: ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    // Protects from SQL injection & common attacks
    shield({ mode: "LIVE" }),

    // Bot protection
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"], // allow Google, Bing, etc.
    }),

    // Simple rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,  // 5 tokens every 10 seconds
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
