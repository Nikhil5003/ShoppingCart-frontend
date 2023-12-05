import React, { useEffect, useState } from "react";

const FilterItems = () => {
  const [value, setValue] = useState("");
  const onInputChange = (e) => {
    const { target: { value: inputValue } = {} } = e;
    setValue(inputValue);
    console.log(inputValue);
    const updatedItems = items.filter(({ title = "" }) =>
      title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResults(updatedItems);
  };
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((data) => {
        return data;
      })
      .then((res) => res.json())
      .then((res) => {
        setItems(res?.products);
        setResults(res?.products);
      });
  }, []);
  return (
    <>
      <input type="text" value={value} onChange={onInputChange} />
      <div>
        {results?.map(({ title }) => (
          <h2>{title}</h2>
        ))}
      </div>
    </>
  );
};

export default FilterItems;
