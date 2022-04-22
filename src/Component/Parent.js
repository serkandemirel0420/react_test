 

import { useState } from "react";
import {MemoizedChildren} from "./Children";

function App() {
    console.log("App");
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> Increase {count}</button>
      <button onClick={() => setCount(0)}> reset {0}</button>
      <MemoizedChildren count={0} />
    </div>
  );
}

export default App;
