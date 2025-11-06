/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Greeting } from "./components/Greeting";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleChangeNumber = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleChangeNumber}>Change Number</button>
      <Greeting name={"Ajay"} age={32} />
    </>
  );
}

export default App;
