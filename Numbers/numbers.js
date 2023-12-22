import { apiKeyNumbers } from "../config.js";

export const optionsNumber = {
  method: "GET",
  url: "http://numbersapi.com/42",
  params: {
    json: "true",
    fragment: "true",
  },
  //   headers: {
  //     "X-RapidAPI-Key": apiKeyNumbers,
  //     "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
  //   },
};

//BELOW just replace optionsNumber in main route
// try {
//   const response = await axios.request(optionsNumber);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
