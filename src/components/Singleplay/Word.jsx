import { useEffect } from "react";

function Word({secretWord, correctLetters}) {
    
    return (
        <div className="word">
            {secretWord.split('').map((letter, index) => {

                return (
                <span key={index} className="secret-word-letter">
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
                )
            })}
        </div>
    )
}
    
export default Word;
    
    
    
    
    
    
    
    
    // correctLetters ? correctLetters.forEach((el, index) => {
    //     if(secretWord.includes(el)) {
    //         return <p className="secret-word-letter--visible" key={index}>{el}</p>
    //     } else {
    //         return <p className="secret-word-letter" key={index}>{el}</p>
    //     }
    // })
    // : secretWord.split('').map((el, index) => {
    //     return <p className="secret-word-letter" key={index}>{el}</p>
    // })