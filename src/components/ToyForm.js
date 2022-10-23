import React, {useState} from "react";

function ToyForm({onAddToy}) {
  //states variables for name, image and likes
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [likes, setLikes] = useState(0);

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    
    if(name === "name"){
      setName(value);
    }
    if(name === "image"){
      setImage(value);
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    const newToy = {
      name,
      image,
      likes
    }
    onAddToy(newToy);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
