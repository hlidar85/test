import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import "./App.css";
import { AppRouter } from "../../server/src/index";
import { useEffect, useState } from "react";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

const sayHi = await client.logToServer.mutate("hi from client");
console.log(sayHi);

console.log(await client.users.update.mutate({ userId: "1212", name: "jón" }));
function App() {
  const [hi, setHi] = useState("");
  useEffect(() => {
    const main = async () => {
      const sayHi = await client.sayHi.query();

      setHi(sayHi);
    };
    main();
  }, []);
  return <div> {hi}</div>;
}

export default App;
