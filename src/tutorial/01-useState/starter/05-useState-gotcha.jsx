import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const click = () => {
    setTimeout(() => {
      setValue((state) => {
        return state + 1;
      })
    }, 3000)
  }
  return (
    <>
      <h1>{value}</h1>
      <button onClick={click}>increase</button>
    </>
  );
};

export default UseStateGotcha;
