import moment from "moment";

export const checkInterval = (startDate, endDate) => {
  const momentStartDate = moment(startDate);
  const momentEndDate = moment(endDate);

  if (momentEndDate.isBefore(momentStartDate)) {
    throw new Error("La date de fin ne peut être avant la date de début");
  }

  if (momentStartDate.add(7, "days").isBefore(momentEndDate)) {
    throw new Error("L'intervalle maximum est de 7 jours");
  }
};
