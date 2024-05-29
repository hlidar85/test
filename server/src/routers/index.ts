import { t } from "../trpc";
import { userRouter } from "./users";

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "hi";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;
      throw new Error("Invalid input: Expected string");
    })
    .mutation((req) => {
      console.log("Client Says: " + req.input);
      return true;
    }),
  users: userRouter,
});
