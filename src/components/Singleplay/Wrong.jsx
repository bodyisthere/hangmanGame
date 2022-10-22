function Wrong({wrongLetters}) {
    return (
        <div className="game__wrong">
            <p className='game__wrong-text'>Wrong</p>
            <p className="game__wrong-miss">{wrongLetters}</p>
        </div>
    )
}

export default Wrong;