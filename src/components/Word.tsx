import React from 'react';

interface WordProps {
    selectedWord: string;
    correctLetters: string[];
}

const Word: React.FC<WordProps> = ({selectedWord, correctLetters}) => {
    return (
        <div className='word'>
            {selectedWord.split('').map((letter, index) => {
                return(
                    <div key={index} className='letter'>
                        {correctLetters.includes(letter) ? letter : ''}
                    </div>
                )
            })}
        </div>
    )
}

export default Word