import { useState } from 'react';
import './App.scss';
import Multiplay from './components/Multiplay/Multiplay.jsx'
import Singleplay from './components/Singleplay/Singleplay.jsx'
import ChooseTopic from './components/Singleplay/ChooseTopic';

function App() {
  const [mode, setMode] = useState('');
  const [topic, setTopic] = useState('');

  return (
    <div className="App">
      {mode === '' 
      ? (
        <>
          <button onClick={() => setMode('singleplay-choose')} className="singleplay">Singleplay</button>
          <button onClick={() => setMode('multiplay')} className="multiplay">Multiplay</button>
        </>
      ) 
      : null
      }
  
      {mode === 'singleplay-choose' ? <ChooseTopic setMode={setMode} setTopic={setTopic}/> : null}
      {mode === 'singleplay' ? <Singleplay setMode={setMode} topic={topic}/> : null}
      {mode === 'multiplay' ? <Multiplay setMode={setMode}/> : null}
    </div>
  );
}

export default App;
