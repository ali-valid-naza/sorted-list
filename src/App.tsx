import React from 'react';
import './App.css';
import axios from "axios";


const fetchData = () => {
  return axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      const { results } = res.data;
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
