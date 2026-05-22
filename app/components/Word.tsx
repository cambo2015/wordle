import { useEffect } from "react"
import Letter, { LetterStatus } from "./Letter"
import { initializeSounds } from "../audio"
import {sameLetterBefore,sameLetterAfter, countLetterInWord } from "../words"

type WordProps = {
    word:String,
    actualWord:String
}

export default function Word({word="",actualWord=""}:WordProps){

    const numberLetters = 5
    // this prints out an empty word (single row)
    if((word === "" || word === '') && (actualWord === "" || actualWord === '')){
        const emptyArr = new Array(numberLetters).fill(0)
        return <div className="flex">
            {emptyArr.map((x,i)=><Letter 
            key={'empty-'+i} 
            letter="A" 
            status={LetterStatus.Empty}
            index={i}
            />
            )}
        </div>
    }
    
    const wordArr = word.split("").map(x=>x.toUpperCase())
    const actualArr = actualWord.split("").map(x=>x.toUpperCase())

    return <div className="flex">
    {wordArr.map((letter,i)=>{
        let status;
        if(actualArr[i] == letter){ //if match 
            status = LetterStatus.Correct
        }
        else if(actualArr.includes(wordArr[i]) ){//if included in array and 
            const letterBefore = sameLetterBefore(wordArr,letter,i)
            const actualLetterCount = countLetterInWord(letter,actualArr)
            //mark the first occurance
            if(!letterBefore){
                status = LetterStatus.Close
            }
            else if(actualLetterCount < 2){
                status  = LetterStatus.Gray
            }
            else{
                status = LetterStatus.Close
            }
        }
        else{
            status = LetterStatus.Incorrect
        }
        return <Letter 
            key={"real-letter-"+i} 
            letter={letter} 
            status={status}  
            index={i}
            />
    })}
    </div>
}
    