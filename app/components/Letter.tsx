import { useEffect } from "react"
import { initializeSounds, playFlip } from "../audio"


export enum LetterStatus{
    Correct,
    Incorrect,
    Close,
    Empty,
    Gray
}

type LetterProps = {
    letter:string,
    status:LetterStatus,
    index:number
}

export default function Letter({letter,status,index}:LetterProps){
    
    const baseClass = 'letter'

   
    const handleAnimation =()=>{
        if(status != LetterStatus.Empty){
            playFlip()
        }
    }
    if(status == LetterStatus.Correct){
        const classes = baseClass + ' ' + 'letter-correct shadow'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}} onAnimationStart={handleAnimation}>{letter}</span>
    }
    else if(status == LetterStatus.Gray){
        const classes = baseClass + ' ' + 'letter-gray shadow'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}} onAnimationStart={handleAnimation}>{letter}</span>
    }
    else if(status == LetterStatus.Incorrect){
        const classes = baseClass + ' ' + 'letter-incorrect shadow'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}} onAnimationStart={handleAnimation}>{letter}</span>
    }
    else if(status == LetterStatus.Empty){
        const classes = baseClass + ' ' + 'letter-empty shadow'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}} onAnimationStart={handleAnimation}> {" "}</span>
    }
    
    const classes = baseClass + ' ' + 'letter-close shadow'
    return <span className={classes} style={{animationDelay:`${index * 0.2}s`}} onAnimationStart={handleAnimation}>{letter}</span>
    
}
