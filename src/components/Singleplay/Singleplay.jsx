import { useEffect, useState } from 'react';
import './Singleplay.scss'
import GameField from './GameField.jsx'
import Wrong from './Wrong.jsx'
import Word from './Word.jsx'
import Popup from './Popup';
import PopupRepeatSymbol from './Popup-repeat-symbol';
import PopupWin from './Popup-win';

import books from '../../data/books.js'
import countries from  '../../data/countries.js'
import famous from '../../data/famous-surnames.js'
import fruits from '../../data/fruits-vegetables.js'


function Singleplay({setMode, topic}) {
    const [secretWord, setSecretWord] = useState(genRandomWord());
    const [correctLetters, setCorrectLetters] = useState('');
    const [wrongLetters, setWrongLetters] = useState([])
    const [lose, setLose] = useState(0);
    const [gameCondition, setGameCondition] = useState('');
    const [gameWinCondition, setGameWinCondition] = useState('')
    const [repeatSymbol, setRepeatSymbol] = useState('');
    
    
    function genRandomWord() {
        if(topic === 'books') {
            const index =Math.round(Math.random() * (books.length - 0) + 0);
            return books[index];
        }
        if(topic === 'fruit-vegetables') {
            const index =Math.round(Math.random() * (fruits.length - 0) + 0);
            return fruits[index];
        }
        if(topic === 'famous-surnames') {
            const index =Math.round(Math.random() * (famous.length - 0) + 0);
            return famous[index].surname;
        }
        if(topic === 'countries') {
            const index =Math.round(Math.random() * (countries.length - 0) + 0);
            return countries[index];
        }
    }

    useEffect(() => {
        
        const handleKeydown = e => {
           if(e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key.toLowerCase();
            
            if(secretWord.includes(letter)) {
                if(!correctLetters.includes(letter)) {
                    setCorrectLetters(curr => [...curr, letter])
                } else {
                    setRepeatSymbol('popup-repeat-symbol--active');
                    setTimeout(() => setRepeatSymbol(''), 2000);
                }
            } else {
                if(!wrongLetters.includes(letter)) {
                    setWrongLetters(curr => [...curr, letter]);
                    setLose(lose + 1)
                } else {
                    setRepeatSymbol('popup-repeat-symbol--active');
                    setTimeout(() => setRepeatSymbol(''), 2000);
                }
            }
        }
    }
    
    window.addEventListener('keyup', handleKeydown);
    return () => window.removeEventListener('keyup', handleKeydown)
    }, [correctLetters, wrongLetters])


function testWin() {
    let result=[];

    for(let str of secretWord.split('')) {
        if(!result.includes(str)) {
            result.push(str)
        }
    }
    if(result.length === correctLetters.length) {
        setGameWinCondition('display--flex')
        return true
    } else {
        return false
    }
}



useEffect(() => {
    if(lose === 7) {
        setGameCondition('display--flex');
    }
}, [lose])


    return (
        <div className='singleplayer'>
            <h1>Hangman - singleplay</h1>
            <h2>Find the hidden word - Enter a letter!</h2>
            <div className="game">
                <div className="game__top">
                    <GameField lose={lose}/>
                    <Wrong wrongLetters={wrongLetters}/>
                </div>
                <Popup secretWord={secretWord} gameCondition={gameCondition} setMode={setMode} setGameCondition={setGameCondition}/>
                <PopupRepeatSymbol repeatSymbol={repeatSymbol}/>
                <PopupWin testWin={testWin} gameWinCondition={gameWinCondition} setMode={setMode} setGameWinCondition={setGameWinCondition}/>
                <div className="game__bottom">
                    <Word correctLetters={correctLetters} secretWord={secretWord}/>
                </div>
            </div>
        </div>
    )
}


export default Singleplay;