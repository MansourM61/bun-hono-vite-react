import { useEffect, useState } from "react";
import { type ApiType } from "../../server/src/apis/api";
import { hc, type InferResponseType } from "hono/client";
import "./App.css";

// create an object representing the client API endpoint. The base URL is
// defined in the `index.ts` file of the server.
const client = hc<ApiType>("/api");
// extract the data type responded from the client API end point
type Data = InferResponseType<typeof client.index.$get>;

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const rawData = await client.index.$get(); // equivalent to `fetch("http://localhost:3000/api")`
      const jsonData = await rawData.json();

      setData(jsonData);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center text-cyan-700">
        {data !== null ? data.id : "fetching"}
      </h1>
      <h1 className="mt-10 text-4xl text-center text-red-900">
        {data !== null ? data.data : "fetching"}
      </h1>

      <button
        className="border-2 border-black bg-green-900 text-2xl text-center block mx-auto"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click me, counter = {count}
      </button>
    </>
  );
}

export default App;
