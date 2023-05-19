import React from 'react';

interface WrongLetterProps {
    wrongLetters: string[];
}

const WrongLetter: React.FC<WrongLetterProps> = ({wrongLetters}) => {
    return (
        <div className='wrong-letters-container'>
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters.map((letter, index) => <span key={index}>{letter}</span>)
                .reduce((prev: React.ReactNode, current: React.ReactNode) => (
                    prev === null ? [current]: [prev, ',', current]
                    ), null)}
            </div>
        </div>
    )
}

export default WrongLetter