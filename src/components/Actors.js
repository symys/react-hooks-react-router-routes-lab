import React from "react";
import { actors } from "../data";

function Actors() {
  const actorFilms = actors.map((actor) => {
    return <div key={actor.name+"+"}>
      <h2>Name: {actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => {
          return <li key={actor.name+"+"+movie}>{movie}</li>
        })}
      </ul>
    </div>
  })

  return <div>
    <h1>Actors Page</h1>
    {actorFilms}
  </div>;
}

export default Actors;
