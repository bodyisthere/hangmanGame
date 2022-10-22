function PopupRepeatSymbol({repeatSymbol}) {
    return (
        <div className={`popup-repeat-symbol ${repeatSymbol}`}>
            <div className="popup-repeat-symbol__content">
                <p className="popup-repeat-symbol__text">You have already tried this letter!</p>
            </div>
        </div>
    )
}

export default PopupRepeatSymbol;