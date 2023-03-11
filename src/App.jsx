
import { useState } from 'react'
import './App.css'
import { getRelatedWords } from './helpers/getRelatedWords';

function App() {

  const [topic, setTopic] = useState('');
  const [relatedWords, setRelatedWords] = useState([]);
  const [language, setLanguage] = useState('sp');
  const [size, setSize] = useState(20);


  const handleSubmit = async (event) => {
    event.preventDefault();
    var relatedWordsArr = await getRelatedWords(topic, size);
    setRelatedWords(relatedWordsArr);
  };

  return (
    <>
      <h1>Linguify</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Topic: </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        />

        <input
          id='size'
          type='number'
          pattern='[0-9]*'
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />

        <select
          id='language'
          onClick={(event) => setLanguage(event.target.value)}
        >
          <option value='en'>English</option>
          <option value='sp'>Spanish</option>
          <option value='pr'>Portuguese</option>
        </select>

        <button>Generate</button>
      </form>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ol style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', columns: '2' }}>
            {relatedWords.slice(0, Math.ceil(relatedWords.length / 2)).map((relatedWord, index) => (
              <li key={relatedWord}>{relatedWord}</li>
            ))}
          </ol>
        </div>
        <div style={{ flex: 1 }}>
          <ol start={size/2 + 1} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', columns: '2' }}>
            {relatedWords.slice(15).map((relatedWord, index) => (
              <li key={relatedWord}>{relatedWord}</li>
            ))}
          </ol>
        </div>
      </div>


    </>


  )
}

export default App
