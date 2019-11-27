import React from "react";
import DatePicker from "react-datepicker";

import "./NeoWsSearch.scss";

const NeoWsForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  setFieldValue,
  startChangeHandler,
  endChangeHandler
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      uk-grid="true"
      className="uk-flex-center uk-flex-bottom neo-ws-form"
    >
      <div>
        {errors.startDate && touched.startDate && (
          <p className="uk-margin-remove">
            <span className="uk-label uk-label-danger">Date incorrecte</span>
          </p>
        )}
        <label>Date de début :</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={values.startDate}
          className="uk-input"
          onChange={value => {
            setFieldValue("startDate", value);
            startChangeHandler(value);
          }}
          // ici onChange est équivalent à :
          // onChange={function(date) {
          //    setStartDate(date);
          // }}
        />
      </div>
      <div>
        {errors.endDate && touched.endDate && (
          <p className="uk-margin-remove">
            <span className="uk-label uk-label-danger">Date incorrecte</span>
          </p>
        )}
        <label>Date de fin :</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={values.endDate}
          className="uk-input"
          onChange={value => {
            setFieldValue("endDate", value);
            endChangeHandler(value);
          }}
        />
      </div>
      <div>
        <button
          className="uk-button uk-button-primary"
          type="submit"
          disabled={isSubmitting}
        >
          RECHERCHER
        </button>
      </div>
    </form>
  );
};

export default NeoWsForm;
