import { useEffect } from "react"
import Letter, { LetterStatus } from "./Letter"
import { initializeSounds } from "../audio"

type WordProps = {
    word:String,
    actualWord:String
}

export default function Word({word="",actualWord=""}:WordProps){

   
    // this prints out an empty word (single row)
    if((word === "" || word === '') && (actualWord === "" || actualWord === '')){
        const emptyArr = new Array(5).fill(0)
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
    {wordArr.map((x,i)=>{

        let status;
        if(actualArr[i] == x){ //if match 
            status = LetterStatus.Correct
        }
        else if(actualArr.includes(wordArr[i])){
            status = LetterStatus.Close
        }
        else{
            status = LetterStatus.Incorrect
        }
        return <Letter 
            key={"real-letter-"+i} 
            letter={x} 
            status={status}  
            index={i}
            />
    })}
    </div>

}
    