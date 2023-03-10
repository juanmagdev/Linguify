
import { useState, useEffect} from 'react'
import './App.css'

function App() {
 
  const [topic, setTopic] = useState('');
  const [relatedWords, setRelatedWords] = useState([]);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.datamuse.com/words?rel_trg=${topic}`);
    const data = await response.json();
    const len = 10;
    const relatedWordsArr = data.slice(0, len).map((item) => item.word);
    setRelatedWords(relatedWordsArr);
    
    console.log(data);
    console.log(topic);
    console.log(relatedWords);
  };

  return (
    <>
      <h1>Linguify</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Topic</label>
        <input 
          id="topic" 
          type="text" 
          value={topic} 
          onChange={(event) => setTopic(event.target.value)} 
        />

        <button>Generate</button>
      </form>

      {relatedWords.length > 0 && (
        <ul>
          {relatedWords.map((relatedWord) => (
            <li key={relatedWord}>{relatedWord}</li>
          ))}
        </ul>
      )}
    </>


  )
}

export default App
