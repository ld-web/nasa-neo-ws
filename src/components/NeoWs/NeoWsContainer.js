import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import NeoWsError from "./NeoWsError";

const NeoWsContainer = () => {
  // On pourrait déclarer une variable d'état structurée
  // useState prend en paramètre la valeur d'initialisation de la variable d'état
  // Cela signifie que dateInterval, à la ligne suivante, vaudra l'objet passé en paramètre
  // const [dateInterval, setDateInterval] = useState({
  //   startDate: new Date(),
  //   endDate: new Date()
  // });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [error, setError] = useState(null);

  const checkInterval = (startDate, endDate) => {
    const momentStartDate = moment(startDate);
    const momentEndDate = moment(endDate);

    if (momentEndDate.isBefore(momentStartDate)) {
      throw new Error("La date de fin ne peut être avant la date de début");
    }

    if (momentStartDate.add(7, "days").isBefore(momentEndDate)) {
      throw new Error("L'intervalle maximum est de 7 jours");
    }
  };

  // useEffect permet de déclencher ce qu'on appelle des "effets de bord"
  // Lors du changement d'une variable d'état (par exemple), on pourra lancer une fonction
  // Cette fonction à lancer est le premier paramètre fourni.
  // Le second paramètre, quant à lui, est un tableau contenant les dépendances, c'est-à-dire les variables qui, quand elles changeront, déclencheront l'appel de la fonction.
  useEffect(() => {
    try {
      console.log("useEffect des dates");
      checkInterval(startDate, endDate);
      setError(null);
    } catch (e) {
      setError({message: e.message});
    }
  }, [startDate, endDate]);

  // On peut déclarer un effet de bord qui ne sera exécuté qu'au montage du composant.
  // Pour faire ça, on déclare notre fonction avec un tableau de dépendances vide.
  // Ainsi, la fonction sera exécutée au montage du composant, mais n'aura aucune dépendance en cas de modification de variable d'état.
  // Elle n'aura donc aucune raison de s'exécuter de nouveau ensuite.
  // C'est l'équivalent de la méthode componentDidMount dans un composant classe
  useEffect(() => {
    console.log("Je suis monté !")
  }, []);

  return (
    <div className="uk-container">
      <NeoWsError error={error} />

      <div>
        Date de début :
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          className="uk-input"
          onChange={date => setStartDate(date)}
          // ici onChange est équivalent à :
          // onChange={function(date) {
          //    setStartDate(date);
          // }}
        />
        Date de fin :
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          className="uk-input"
          onChange={date => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default NeoWsContainer;
