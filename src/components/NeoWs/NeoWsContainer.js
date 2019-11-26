import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import NeoWsError from "./NeoWsError";

const NeoWsContainer = () => {
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

  useEffect(() => {
    try {
      checkInterval(startDate, endDate);
      setError(null);
    } catch (e) {
      setError({message: e.message});
    }
  }, [startDate, endDate]);

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
