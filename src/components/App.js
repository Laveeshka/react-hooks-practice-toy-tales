import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

//draw out component hierarchy
//-App
//--Header
//--ToyForm
//--ToyContainer
//----ToyCard

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3001/toys")
      .then(res => res.json())
      .then(toysData => setToys(toysData))
      .catch(err => console.warn(err.message))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
