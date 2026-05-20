

export enum LetterStatus{
    Correct,
    Incorrect,
    Close,
    Empty
}

type LetterProps = {
    letter:String,
    status:LetterStatus
}

export default function Letter({letter,status}:LetterProps){
    
    const baseClass = 'letter'
    if(status == LetterStatus.Correct){
        const classes = baseClass + ' ' + 'letter-correct'
        return <span className={classes}>{letter}</span>
    }
    else if(status == LetterStatus.Incorrect){
        const classes = baseClass + ' ' + 'letter-incorrect'
        return <span className={classes}>{letter}</span>
    }
    else if(status == LetterStatus.Empty){
        const classes = baseClass + ' ' + 'letter-empty'
        return <span className={classes}> {" "}</span>
    }
    
    const classes = baseClass + ' ' + 'letter-close'
    return <span className={classes}>{letter}</span>
    
}
