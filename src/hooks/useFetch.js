import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState("");

  useEffect(() => {

    if (!url) {
      setLoading(false);
      return;
    }

    async function getData() {

      try {

        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();

        setData(result);

      } catch (error) {

        console.log("Fetch Error:", error);

        setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    getData();

  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;