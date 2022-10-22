function PopupWin({gameWinCondition, setGameWinCondition, setMode, testWin}) {
    function closePopup() {
        setGameWinCondition('');
        setMode('');
    }

    function startNewGame() {
        setMode('');
        setTimeout(() => {
            setMode('singleplay');
        },1)
    }

    if(testWin()) {
        return (
            <div className={`popup ${gameWinCondition}`}>
                <div className="popup__content">
                    <div className="popup__text">You win!</div>
                    <p className="popup__new-game">You can start a new game <br /> or<br /> go to the main page by clicking "x".</p>
                    <button onClick={startNewGame} className="popup__new-game-start">Start!</button>
                    <button onClick={closePopup} className="popup__close">x</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default PopupWin;