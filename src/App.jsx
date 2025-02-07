import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
function App() {
  const [placeHolder, setPlaceHolder] = useState(true);
  const [text, setText] = useState('');
  const [getUser, setGetUser] = useState([]);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState(null);

  async function handleSearch() {
    console.log(placeHolder);
    setPlaceHolder(false);
    setGetUser([]);
    setError(false);

    try {
      const response = await fetch(`https://api.github.com/users/${text}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGetUser([data]); // Set the new user data
      console.log(data);
      return data;
    } catch (error) {
      setError(true);
      console.log(error);
      throw error;
    }
  }

  const clickHandler = () => {
    handleSearch();
    setText('');
  };

  return (
    <div className='bg-slate-900 min-h-screen light:bg-white'>
      <div className='my-container'>
        <Header text={text} setText={setText} clickHandler={clickHandler} />
        <Main
          text={text}
          getUser={getUser}
          placeHolder={placeHolder}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
