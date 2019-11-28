import React from "react";
import DatePicker from "react-datepicker";

import './NeoWsSearch.scss';

const NeoWsSearch = ({
  startDate,
  endDate,
  startDateChangeHandler,
  endDateChangeHandler,
  onClickHandler
}) => {
  return (
    <div uk-grid="true" className="uk-flex uk-flex-center uk-flex-bottom">
      <div>
        <label>Date de début :</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          className="uk-input"
          onChange={startDateChangeHandler}
          // ici onChange est équivalent à :
          // onChange={function(date) {
          //    setStartDate(date);
          // }}
        />
      </div>
      <div>
        <label>Date de fin :</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          className="uk-input"
          onChange={endDateChangeHandler}
        />
      </div>
      <div>
        <button
          className="uk-button uk-button-primary"
          onClick={onClickHandler}
        >
          RECHERCHER
        </button>
      </div>
    </div>
  );
};

export default NeoWsSearch;
