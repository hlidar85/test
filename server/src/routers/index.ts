import { adminProcedure, t } from "../trpc";
import { userRouter } from "./users";

export const AppRouter = t.router({
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
  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super top secret admin data";
  }),
  users: userRouter,
});
