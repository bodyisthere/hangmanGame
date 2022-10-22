function Popup({gameCondition, setGameCondition, setMode, secretWord}) {
    
    function closePopup() {
        setGameCondition('');
        setMode('');
    }
    function startNewGame() {
        setMode('');
        setTimeout(() => {
            setMode('singleplay');
        },1)
    }

    return (
        <div className={`popup ${gameCondition}`}>
            <div className="popup__content">
                <div className="popup__text">Game over!</div>
                <p className="popup__new-game">Word: {secretWord}</p>
                <button onClick={startNewGame} className="popup__new-game-start">Start!</button>
                <button onClick={closePopup} className="popup__close">x</button>
            </div>
        </div>
    )
}

export default Popup;