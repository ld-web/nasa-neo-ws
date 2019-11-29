import React from "react";

const NeoWsAsteroids = ({ asteroidsCollection }) => {
  // Extraction des dates
  const asteroidsDates = Object.keys(asteroidsCollection);
  console.log("Dates des astéroïdes : ", asteroidsDates);

  // sort va modifier la position des éléments dans notre tableau
  // slice permet donc de faire une copie du tableau puis un tri
  const sortedAsteroidDates = asteroidsDates.slice().sort((a, b) => {
    let dateA = new Date(a);
    let dateB = new Date(b);

    return dateA - dateB;
  });

  return (
    <div>
      {sortedAsteroidDates.map(asteroidsDate => (
        <div key={asteroidsDate}>
          <h2>{asteroidsDate}</h2>
          <div>
            {asteroidsCollection[asteroidsDate].map(asteroid => (
              <div key={asteroid.id}>
                {asteroid.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeoWsAsteroids;
