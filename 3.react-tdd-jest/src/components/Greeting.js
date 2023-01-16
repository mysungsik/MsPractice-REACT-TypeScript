import { useState } from "react";
import Async from "./Async";
import Output from "./Output";

const Greeting = () => {
  const [textChange, setTextChange] = useState(false);
  return (
    <div>
      <div>
        <h2>Greeting !</h2>
        <p>Hello world!</p>
        <button onClick={() => setTextChange((prev) => !prev)}> Click</button>
      </div>
      <div>
        {textChange && <Output>text Changed!</Output>}
        {!textChange && <Output>text not Changed!</Output>}
      </div>
      <div>
        <Async />
      </div>
    </div>
  );
};

export default Greeting;
