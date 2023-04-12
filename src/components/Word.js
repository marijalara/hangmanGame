import React from "react";

const Word=({selectedWord, correctLetters}) => {
    return(
        <div className="word">
            {selectedWord.split('').map((letter, index) => {
                return(
                   <div key={index} className="letter">
                    {correctLetters.includes(letter) ? letter : ''}
                   </div> 
                )
            })}
        </div>
    )
}

export default Word