function ChooseTopic({setTopic, setMode}) {
    return (
        <div className="topic">
            <button onClick={() => {setTopic('books'); setMode('singleplay')}} className="topic__card"><i className="fa-solid fa-book"></i>books</button>
            <button onClick={() => {setTopic('fruit-vegetables');setMode('singleplay')}} className="topic__card"><i className="fa-solid fa-apple-whole"></i>fruit & vegetables</button>
            <button onClick={() => {setTopic('famous-surnames');setMode('singleplay')}} className="topic__card"><i className="fa-solid fa-crown"></i>famous surnames</button>
            <button onClick={() => {setTopic('countries');setMode('singleplay')}} className="topic__card"><i className="fa-solid fa-flag-usa"></i>country flags</button>
        </div>
    )
}

export default ChooseTopic;