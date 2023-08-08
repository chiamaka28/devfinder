import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";



function App() {
  const [placeHolder, setPlaceHolder] = useState(true)
  const [text, setText] = useState("");
  const [getUser, setGetUser] = useState([]);
  const [theme, setTheme] = useState(null);

  async function handleSearch() {
    setPlaceHolder(false)
    const response = await fetch(
      `https://api.github.com/users/${text}`
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const arr = [];
    console.log(data);
    setGetUser(arr);
    arr.push(data);
    console.log(getUser);
    return data;
  }


  const clickHandler = () => {
    handleSearch();
    setText("");
  };

  return (
    <div className="bg-slate-900 min-h-screen light:bg-white">
      <div className="my-container">
        <Header text={text} setText={setText} clickHandler={clickHandler} />
        <Main text={text} getUser={getUser} placeHolder={placeHolder}/>
      </div>
    </div>
  );
}

export default App;
