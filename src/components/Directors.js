import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDetail = directors.map((director) => {
    return <div key={director.name+"+"}>
      <h2>Name: {director.name}</h2>
      <ul>
        {director.movies.map((movie) => {
          return <li key={director.name+"+"+movie}>{movie}</li>
        })}
      </ul>
    </div>
  })

  return <div>
    <h1>Directors Page</h1>
    {directorsDetail}
  </div>;
}

export default Directors;
