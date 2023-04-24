/** @format */

import axios from "axios";

async function DetailGeo(longitude?: string, latitude?: string) {
  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  
  return response;
}

export {DetailGeo}
