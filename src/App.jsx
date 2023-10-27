import React from "react";
import Die from "./Die"
export default function App() {
  const [dice,setdice]=React.useState(allnewDice())
  function allnewDice(){
    const newDice=[]
    for(let i=0;i<10;i++){

      newDice.push(Math.ceil(Math.random()*6))
    }
    return newDice
  }
  setdice(die=>)


  return (
    <main>
      <div className="dice-container">

        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  )
}