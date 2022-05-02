import React from "react";
import Button from "./components/Button/Button";

export default function App() {
  
  const [count, setCount] = React.useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline py-5">
        Count: {count}
      </h1>
        <Button setCount={setCount} count={count} />
    </>
  );
}