

export enum LetterStatus{
    Correct,
    Incorrect,
    Close,
    Empty
}

type LetterProps = {
    letter:string,
    status:LetterStatus,
    index:number
}

export default function Letter({letter,status,index}:LetterProps){
    
    const baseClass = 'letter'
    if(status == LetterStatus.Correct){
        const classes = baseClass + ' ' + 'letter-correct'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}}>{letter}</span>
    }
    else if(status == LetterStatus.Incorrect){
        const classes = baseClass + ' ' + 'letter-incorrect'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}}>{letter}</span>
    }
    else if(status == LetterStatus.Empty){
        const classes = baseClass + ' ' + 'letter-empty'
        return <span className={classes} style={{animationDelay:`${index * 0.2}s`}}> {" "}</span>
    }
    
    const classes = baseClass + ' ' + 'letter-close'
    return <span className={classes} style={{animationDelay:`${index * 0.2}s`}}>{letter}</span>
    
}
