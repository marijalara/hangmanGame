import React from "react";

const WrongLetter=({wrongLetters}) => {
    return(
        <div className="wrong-letters-container">
            <div>
            {wrongLetters.length >0 && <p>Wrong</p>}
            {wrongLetters.map((letter, index) => <span key={index}>{letter}</span>)
                .reduce((prev, current) => prev===null ? [current]: [prev, ',', current], null)
            }
        </div>
        </div>
    )
}

export default WrongLetter