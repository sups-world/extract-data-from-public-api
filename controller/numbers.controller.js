import axios from "axios";

//gets a random fact from the input number
export const randomNumberController = async (req, res) => {
  const { inputNumber } = req.query;
  let input = parseInt(inputNumber);
  //   console.log(inputNumber, typeof inputNumber);
  try {
    const response = await axios.get(`http://numbersapi.com/${input}`);
    // console.log(response.data);
    return res.status(200).send(response.data);
  } catch (error) {
    console.log("error:::", error);
    return res.status(400).send("an error has occured");
  }
};
