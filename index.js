import express from "express";
import { port } from "./config.js";

import axios from "axios";
import { optionsNumber } from "./Numbers/numbers.js";
import { programRoutes } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", programRoutes);

// app.get("/home", (req, res) => {
//   res.status(200).send("this is the homepage");
// });

// app.get("/api/data", async (req, res) => {
//   try {
//     const data = await fetchData();
//     res.json(data);
//   } catch (error) {
//     console.log("error fetching data::", error);
//     res.status(500).json({ error: "failed to fetch data" });
//   }
// });

// //Numbers
// app.get("/api/numbers/number-fact", async (req, res) => {
//   const { inputNumber } = req.query;
//   console.log(req.params);
//   try {
//     const response = await axios.get(`http://numbersapi.com/${inputNumber}`);
//     console.log(response.data);
//     return res.status(200).send(response.data);
//   } catch (error) {
//     console.error(error);
//     return res.status(400).send(`An error has occured`);
//   }
// });

// //Functions
// //get data
// const fetchData = async () => {
//   try {
//     const response = await axios.get("https://api.example.com/data");
//     return response.data;
//   } catch (error) {
//     throw new Error("failed to fetch data from API");
//   }
// };

// //get numbers data

// //post data
// const postData = async () => {
//   try {
//     let payload = {
//       city: "Kanpur",
//       temperature: "C",
//     };
//   } catch (error) {
//     throw new Error("failed to fetch data from API");
//   }
// };

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
