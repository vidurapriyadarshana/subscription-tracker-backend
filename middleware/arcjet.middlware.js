import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    // If Arcjet denies the request
    if (decision.isDenied()) {
      if (decision.reason?.isRateLimit()) {
        return res.status(429).json({ error: "Rate limit exceeded" });
      }

      if (decision.reason?.isBot()) {
        return res.status(403).json({ error: "Access denied for bots" });
      }

      return res.status(403).json({ error: "Request denied" });
    }

    // Otherwise continue
    return next();
  } catch (error) {
    console.error("Arcjet Middleware Error:", error);

    // Don't send a response here; just pass it to Express error handler
    return next(error);
  }
};

export default arcjetMiddleware;
