import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [url]);

  return data;
};

export default useFetch;

// ########################### Rules of CustomeHook ############################

// Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions
// Only call Hooks from React function components
// Don’t call Hooks from regular JavaScript functions
