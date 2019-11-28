import React from "react";

const NeoWsAsteroids = ({ asteroidsCollection }) => {
  // Extraction des dates
  const asteroidsDates = Object.keys(asteroidsCollection);
  console.log("Dates des astéroïdes : ", asteroidsDates);

  return (
    <div>
      {asteroidsDates.map(asteroidsDate => (
        <div>
          <h2>{asteroidsDate}</h2>
          <div>
            {asteroidsCollection[asteroidsDate].map(asteroid => (
              <div key={asteroid.id}>{asteroid.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeoWsAsteroids;
