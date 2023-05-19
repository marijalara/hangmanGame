import React, {useState, useEffect} from 'react';
import Header from './Header';
import Figure from './Figure';
import Word from './Word';
import WrongLetter from './WrongLetter';
import Popup from './Popup';
import Notification from './Notification';
import { showNotification as show } from './helper/Helper';

const words: string[]=['application', 'programming', 'javascript', 'interface', 'project', 'network', 'keyboard']

let selectedWord:string=words[Math.floor(Math.random() * words.length)]

const App = () => {
    const [correctLetters, setCorrectLetters]=useState<string[]>([])
    const [wrongLetters, setWrongLetters]=useState<string[]>([])
    const [playable, setPlayable]=useState<boolean>(true)
    const [showNotification, setShowNotification]=useState<boolean>(false)

    useEffect(() => {
        const handleKey=(e: KeyboardEvent) => {
            const {key, keyCode}=e
            if(playable && keyCode >=65 && keyCode<=90) {
                const letter=key.toLowerCase()

                if(selectedWord.includes(letter)) {
                    if(!correctLetters.includes(letter)) {
                        setCorrectLetters(current=> [...current, letter])
                    } else {
                        show(setShowNotification)
                    }
                } else {
                    if(!wrongLetters.includes(letter)) {
                        setWrongLetters(current=> [...current,letter])
                    } else {
                        show(setShowNotification)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKey)
        return() => window.removeEventListener('keydown', handleKey)
    },[correctLetters, wrongLetters, playable])

    const playAgain=() => {
        setPlayable(true)

        setCorrectLetters([])
        setWrongLetters([])
        
        const random=Math.floor(Math.random() * words.length)
        selectedWord=words[random]
    }
    
    return (
        <>
        <Header />
        <div className='game-container'>
            <Figure wrongLetters={wrongLetters}/>
            <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
            <WrongLetter wrongLetters={wrongLetters}/>
        </div>
        <Popup 
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
        />
        <Notification showNotification={showNotification}/>
        </>
    )
}

export default App