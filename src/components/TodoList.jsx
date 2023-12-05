import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    const size = todos.length;
    const item = {
      id: size + 1,
      value: value,
    };
    if (value.length) {
      setTodos((prev) => [...prev, item]);
      setValue("");
    } else {
      alert("please enter todo first");
    }
  };
  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };
  useEffect(() => {
    const savedData = localStorage.getItem("savedData");
    if (savedData) {
      setTodos(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo application</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 10,
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          value={value}
          style={{ padding: 10 }}
          onChange={onChange}
        />
        <span
          onClick={addTodo}
          style={{
            backgroundColor: "yellow",
            padding: 10,
            marginLeft: 10,
          }}
        >
          +
        </span>
      </div>
      <div>
        {todos?.map(({ id, value }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: 10,
              justifyContent: "center",
              margin: 20,
            }}
          >
            <h1>{value}</h1>
            <span
              style={{
                backgroundColor: "red",
                padding: 5,
                marginLeft: 20,
                width: 100,
                opacity: 0.5,
              }}
              onClick={() => deleteTodo(id)}
            >
              Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
