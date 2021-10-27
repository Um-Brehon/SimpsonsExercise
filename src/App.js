import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';

function App() {

  const [simpsonsQuote, setSimpsonsQuote] = useState(' ');

  useEffect(() => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setSimpsonsQuote(data[0])
      })
  }, []);

  const getSimpsonsQuote = () => {
      axios 
        .get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((response) => response.data)
        .then((data) => {
          setSimpsonsQuote(data[0]);
      })
    };

  return (
    <main>
      <button onClick={getSimpsonsQuote}>Get Quote</button>
      <div>
            <QuoteCard simpsonsQuote={simpsonsQuote} />
      </div>
    </main>
  );
}

export default App;
