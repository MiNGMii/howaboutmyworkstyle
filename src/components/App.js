import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const[typeObj, setTypeObj] = useState(null);

  return (
    <AppRouter typeObj={typeObj} />
  );
}

export default App;
