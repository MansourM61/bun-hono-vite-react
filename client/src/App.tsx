import { useEffect, useState } from "react";
import "./App.css";

interface Data {
  id: number;
  data: string;
}

function App() {
  const [data, setData] = useState<Data | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("/api");
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
