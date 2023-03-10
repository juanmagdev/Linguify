
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
    // console.log(relatedWordsArr);
    setRelatedWords(relatedWordsArr);
    
  //   console.log(size);
  //   console.log(language);
  //   // console.log(data);
  //   console.log(topic);
  //   console.log(relatedWords);
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

      {relatedWords.length > 0 && (
        <ol>
          {relatedWords.map((relatedWord) => (
            <li key={relatedWord}>{relatedWord}</li>
          ))}
        </ol>
      )}
    </>


  )
}

export default App
