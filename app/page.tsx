"use client";

import Word from "./components/Word";
import { ChangeEvent,MouseEvent, useEffect, useState } from "react";
import ReloadButton from "./components/ReloadButton"
import { getWord } from "./words";

export default function Home() {
  
  

  const maxNumGuesses = 5
  const [actualWord,setActualWord] = useState<string>(getWord())
  const [numGuesses,setNumGuesses] = useState<number>(maxNumGuesses)
  const [guesses,setGuesses] = useState<string[]>([])
  const [currentInput,setCurrentInput] = useState<string>("")
  const [emptyBoxes,setEmptyBoxes] = useState<number[]>(new Array(maxNumGuesses).fill(0))
  const [gameOver,setGameOver] = useState<boolean>(false)
  

  useEffect(() => {
    reset();
  }, [])

  const reset = ()=>{
      setNumGuesses(maxNumGuesses)
      setGuesses([])
      setCurrentInput("")
      setEmptyBoxes(new Array(maxNumGuesses).fill(0))
      setGameOver(false)
      setActualWord(getWord())
  }

  const handleSetOnChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCurrentInput(e.target.value)
  }

  const handleOnClick =(e:MouseEvent<HTMLButtonElement>)=>{

      if(currentInput.trim() === "" || numGuesses <=0){
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

      if(currentInput.trim().toLowerCase() === actualWord.toLowerCase()){
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
        <div id="top-bar">
          <span>Wordle</span>
        </div>
        <span className="chip">{"guesses: "+numGuesses}</span>
       
       <div id="guesses-container">
          <div>
           {guesses.map((guess,i)=><Word key={"actual-guess"+i} word={guess} actualWord={actualWord} />)}
            {/* show the remainder of the objects*/}
            {emptyBoxes.map((x,i)=><Word key={"guess-"+i} word="" actualWord=""/>)}
          </div>
          <div>
            {/*start*/}
              <div id="input-container"  >
                <p>Enter a 5 letter word below:</p>
                <div className="d-flex">
                    <input onChange={handleSetOnChange} />
                    {
                      gameOver? <ReloadButton reset={reset}/>: <button onClick={handleOnClick} disabled={gameOver}>Submit</button>
                    }
                </div>
              </div>
            {/* end */}
          </div>
         
        </div>
      </div>
  );
}
