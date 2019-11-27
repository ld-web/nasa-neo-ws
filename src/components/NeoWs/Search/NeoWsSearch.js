import React from "react";
import { Formik } from "formik";
import NeoWsFormSchema from "./NeoWsFormSchema";
import NeoWsForm from "./NeoWsForm";

const NeoWsSearch = ({
  startDateValue,
  endDateValue,
  startChangeHandler,
  endChangeHandler
}) => {
  const initialValues = {
    startDate: startDateValue,
    endDate: endDateValue
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={NeoWsFormSchema}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setTimeout(() => {
          setSubmitting(false);
          console.log("values", values);
        }, 2500);
      }}
    >
      {props => (
        <NeoWsForm
          startChangeHandler={startChangeHandler}
          endChangeHandler={endChangeHandler}
          {...props}
        />
      )}
    </Formik>
  );
};

export default NeoWsSearch;
