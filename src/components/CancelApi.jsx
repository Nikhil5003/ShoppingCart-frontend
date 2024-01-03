import React from "react";

function CancelApi() {
  const { useState } = React;
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((p) => {
      return p + 1;
    });
  };

  const { useEffect } = React;
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async (id) => {
      try {
        const api_url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        const res = await fetch(api_url, { signal });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData(count);
    return () => controller.abort();
  }, [count]);
  return (
    <div>
      <button onClick={handleClick} type="button">
        Make api call with id : {count}
      </button>
    </div>
  );
}

export default CancelApi;
