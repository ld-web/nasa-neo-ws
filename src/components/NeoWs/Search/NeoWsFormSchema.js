import * as yup from 'yup';

const NeoWsFormSchema = yup.object().shape({
  startDate: yup
    .date("Le format de la date est incorrect")
    .required("La date de début est obligatoire"),
  endDate: yup
    .date()
    .required("La date de fin est obligatoire")
});

export default NeoWsFormSchema;