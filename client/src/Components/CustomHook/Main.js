import React from "react";
import useFetch from "./useFetch";

const Main = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => (
          <p key={item.id}>
            {item.id}
            {item.title}
            {item.completed}
          </p>
        ))}
    </>
  );
};

export default Main;
