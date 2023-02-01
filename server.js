const express = require("express");
const {Configuration,OpenAIApi} = require("openai")

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./model");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple route
app.get("/", async (req, res) => {

//   const configuration = new Configuration({
//     organization: "org-vQDH2tXi3bmmaAFaqmSrEI1l",
//     // apiKey: process.env.OPENAI_API_KEY,
//     apiKey: "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",

// });
// const openai = new OpenAIApi(configuration);
// // console.log(openai);
// // openai.prompt({
// //   model: "text-davinci-002",
// //   prompt: "What is the meaning of life?"
// // }).then(response => {
// //   console.log(response);
// // });
// console.log('****************deninc 00****************2')
// const completion = await openai.createCompletion({
//   model: "code-davinci-002",
//   prompt: "promisify a function",
//   temperature: 0.5,
//   max_tokens: 500,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
// console.log(completion.data.choices[0].text);
// console.log("&*******  code-davinci-001   *******")
// const completion1 = await openai.createCompletion({
//   model: "code-davinci-001",
//   prompt: "promisify a function js",
//   temperature: 0.5,
//   max_tokens: 500,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
// console.log(completion1.data.choices[0].text);
// console.log("&*******  text   *******")
// const completion2 = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "promisify a function js",
//   temperature: 0.5,
//   max_tokens: 500,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });
// console.log(completion2.data.choices[0].text);
// console.log(completion.data.choices[0].text);

// const response = await openai.listEngines();
// console.log(response.data.data)
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/routes")(app);
require("./routes/chat")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

});






