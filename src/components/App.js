import React, { useState } from "react";
import AppRouter from "./Router";

function App() {
  const[typeObj, setTypeObj] = useState({
    typeState: 'IE',
    questionNo: 1,
    IE: 0,
    NS: 0,
    FT: 0,
    PJ: 0,
  });

  return (
    <AppRouter typeObj={typeObj} setTypeObj={setTypeObj} />
  );
}

export default App;
