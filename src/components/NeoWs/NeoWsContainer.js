import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import NeoWsError from "./NeoWsError";
import { getNeoFeed } from "../../services/neoWs";
import { DATE_FORMAT } from "../../constants";
import NeoWsSearch from "./Search/NeoWsSearch";
import { checkInterval } from "../../utils/dateUtils";

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
      setError({ message: e.message });
    }
  }, [startDate, endDate]);

  // On peut déclarer un effet de bord qui ne sera exécuté qu'au montage du composant.
  // Pour faire ça, on déclare notre fonction avec un tableau de dépendances vide.
  // Ainsi, la fonction sera exécutée au montage du composant, mais n'aura aucune dépendance en cas de modification de variable d'état.
  // Elle n'aura donc aucune raison de s'exécuter de nouveau ensuite.
  // C'est l'équivalent de la méthode componentDidMount dans un composant classe
  useEffect(() => {
    console.log("Je suis monté !");
  }, []);

  const getDataApi = async () => {
    try {
      const momentStartDate = moment(startDate).format(DATE_FORMAT);
      const momentEndDate = moment(endDate).format(DATE_FORMAT);

      const res = await getNeoFeed(momentStartDate, momentEndDate);
      console.log(res.data);
    } catch {
      setError({ message: "Une erreur est survenue pendant la récupération des données" });
    }
  };

  return (
    <div className="uk-container">
      <NeoWsError error={error} />

      <NeoWsSearch
        startDate={startDate}
        endDate={endDate}
        startDateChangeHandler={date => setStartDate(date)}
        endDateChangeHandler={date => setEndDate(date)}
        onClickHandler={getDataApi}
      />
    </div>
  );
};

export default NeoWsContainer;
