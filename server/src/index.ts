// src/index.ts
import cors from "cors";
import express from "express";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { AppRouter } from "./routers";
import { createContext } from "./context";

const app = express();
const port = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  "/trpc",
  createExpressMiddleware({
    router: AppRouter,
    createContext: createContext,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export type AppRouter = typeof AppRouter;
