import React, {useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from '../spotify';

function App() {

   // Run code based on a given condition
   useEffect(() => {
    const token = getTokenFromUrl()
    window.location.hash = "";
  }, [])

  return (
  
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
