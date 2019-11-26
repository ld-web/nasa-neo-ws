import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NeoWsContainer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    console.log(startDate);
    console.log(endDate);
  }, [startDate, endDate]);

  return (
    <>
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
    </>
  );
};

export default NeoWsContainer;
