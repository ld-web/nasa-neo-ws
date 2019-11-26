import React from "react";

const Alert = ({ type, message }) => (
  <div uk-alert="true" className={`uk-alert-${type}`}>
    {message}
  </div>
);

export default Alert;
