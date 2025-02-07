import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
function App() {
  const [placeHolder, setPlaceHolder] = useState(true);
  const [text, setText] = useState('');
  const [getUser, setGetUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();
  const [theme, setTheme] = useState(null);

  async function handleSearch() {
    console.log(placeHolder);
    setPlaceHolder(false);
    setGetUser([]);
    setError(false);
    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${text}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGetUser([data]);
      setText('');
      return data;
    } catch (error) {
      setText('');
      setLoading(false);
      setError(true);
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  const clickHandler = (e) => {
    e.preventDefault();
    handleSearch();
    setText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(event);
    }
  };
  return (
    <ThemeProvider>
      <div className='bg-whitish-blue dark:bg-dark-navy-blue min-h-screen light:bg-white'>
        <div className='my-container'>
          <Header
            text={text}
            setText={setText}
            clickHandler={clickHandler}
            handleKeyDown={handleKeyDown}
          />
          <Main
            text={text}
            getUser={getUser}
            placeHolder={placeHolder}
            error={error}
            loading={loading}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
