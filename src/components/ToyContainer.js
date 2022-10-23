import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  const toyCardsComponents = toys.map((toy) => (
    <ToyCard key={toy.id} toy={toy} />
  ));

  return <div id="toy-collection">{toyCardsComponents}</div>;
}

export default ToyContainer;
