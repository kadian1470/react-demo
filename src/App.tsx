import React from "react";
import Corporations from "./components/Corporations";

function App(): JSX.Element {
  const corporations = [
    {
      id: 1,
      name: "KCF Tech",
      icon: "kcflogo.svg"
    },
    {
      id: 1,
      name: "Amazon",
      icon: "amazon.svg"
    },
    {
      id: 1,
      name: "IBM",
      icon: "IBM.svg"
    }
  ];
  return <Corporations></Corporations>;
}
export default App;
