import { NEO_WS_URL } from "../constants";
import Axios from "axios";

export const getNeoFeed = async (startDate, endDate) => {
  const data = await Axios.get(
    `${NEO_WS_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_API_KEY}`
  );

  return data;
};
