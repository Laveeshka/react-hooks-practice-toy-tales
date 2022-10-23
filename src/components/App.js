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

  function postNewToy(newToy){
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(postedToy => {
        const updatedToys = [...toys, postedToy];
        setToys(updatedToys);
      })
      
  }

  function deleteToy(deletedToy){
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id);
    setToys(updatedToys);
  }

  function updateToy(patchedToy){
    const updatedToys = toys.map(toy => {
      if(toy.id === patchedToy.id){
        return patchedToy;
      }
      else {
        return toy;
      }
    });

    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={postNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={deleteToy} onLikedToy={updateToy}/>
    </>
  );
}

export default App;
