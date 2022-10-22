function GameField({lose}) {

    function checkLose() {
        if(lose === 1) {
            return (
            <div className="gallows__step-1"></div>
            )
        }
        if(lose === 2) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
            </>
            )
        }
        if(lose === 3) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
                <div className="gallows__step-3"></div>
            </>
            )
        }
        if(lose === 4) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
                <div className="gallows__step-3"></div>
                <div className="gallows__step-4"></div>
            </>
            )
        }
        if(lose === 5) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
                <div className="gallows__step-3"></div>
                <div className="gallows__step-4"></div>
                <div className="gallows__step-5"></div>
            </>
            )
        }
        if(lose === 6) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
                <div className="gallows__step-3"></div>
                <div className="gallows__step-4"></div>
                <div className="gallows__step-5"></div>
                <div className="gallows__step-6"></div>
            </>
            )
        }
        if(lose === 7) {
            return (
            <>
                <div className="gallows__step-1"></div>
                <div className="gallows__step-2"></div>
                <div className="gallows__step-3"></div>
                <div className="gallows__step-4"></div>
                <div className="gallows__step-5"></div>
                <div className="gallows__step-6"></div>
                <div className="gallows__step-7">x x</div>
            </>
            )
        }
    }
    
    return (
        <div className="game__field">
            <div className="gallows">
                <div className="gallows__line-1"></div>
                <div className="gallows__line-2"></div>
                <div className="gallows__line-3"></div>
                <div className="gallows__line-4"></div>
                {checkLose()}
            </div>
        </div>
    )
}

export default GameField;