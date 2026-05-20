"use client";

import Image from "next/image";
import Word from "./components/Word";
import { ChangeEvent,MouseEvent, useState } from "react";

export default function Home() {
  const actualWord = "Paint"
  const maxNumGuesses = 5
  const [numGuesses,setNumGuesses] = useState<number>(maxNumGuesses)
  const [guesses,setGuesses] = useState<string[]>([])
  const [currentInput,setCurrentInput] = useState<string>("")
  const [emptyBoxes,setEmptyBoxes] = useState<number[]>(new Array(maxNumGuesses).fill(0))
  const [gameOver,setGameOver] = useState<boolean>(false)
  

  const handleSetOnChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCurrentInput(e.target.value)
  }

  const handleOnClick =(e:MouseEvent<HTMLButtonElement>)=>{

      if(currentInput.trim() ==="" || numGuesses <=0){
        return
      }
      if(currentInput.length < 5){
        alert("Word must be 5 characters in length!")
        return
      }
      if(currentInput.length > 5){
        alert("Word must be less than 5 characters")
        return 
      }

      if(currentInput === actualWord){
        alert("You won!")
        setGameOver(true)
      }

      const newNumGuessesAmount = numGuesses-1
      setGuesses([...guesses,currentInput])
      setNumGuesses(newNumGuessesAmount)
      setCurrentInput("")
      setEmptyBoxes(new Array(newNumGuessesAmount).fill(0))
  }

  return (
    <div>
      <div>
        {"guesses:"+numGuesses}
       
       {guesses.map((guess,index)=><Word word={guess} actualWord={actualWord} />)}
       {/* show the remainder of the objects*/}
       {emptyBoxes.map(x=><Word word="" actualWord=""/>)}
        
        
        <div className="d-flex">
           <input onChange={handleSetOnChange} />
           <button onClick={handleOnClick} disabled={gameOver}> Submit</button>
        </div>
       
      </div>
      
    
    </div>
  );
}
