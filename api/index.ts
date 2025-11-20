import express from "express";
import { registerRoutes } from "../server/routes";

const app = express();

app.use(express.json({
  verify: (req: any, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Register all API routes
registerRoutes(app);

export default app;
