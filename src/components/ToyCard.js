import React, {useState} from "react";

function ToyCard({toy, onDeleteToy, onLikedToy}) {
  const {id, name, image, likes} = toy;

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => onDeleteToy(toy))
  }

  function handleLikes(){
    //patch request
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    })
    .then(res => res.json())
    .then(patchedToy => onLikedToy(patchedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
