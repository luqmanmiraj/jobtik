const dbConfig = require("./db.js");
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai")

const request = require('request')
const configuration = new Configuration({
  organization: dbConfig.org,
  apiKey: process.env.OPENAI_API_KEY,
  apiKey: dbConfig.chatkey

});
const openai = new OpenAIApi(configuration);

exports.dev2 = async (req, res) => {

  process.env.APIVAL = Number(process.env.APIVAL) + 1;
  console.log(process.env.APIVAL);
  console.log(req.query)
  console.log(Date.now())

  console.log('****************deninc 00****************2')

  try {
    const completion = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: req.query.query,

      temperature: 0.5,
      top_p: 1,
      max_tokens: 500,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("completion.data.choices")
    console.log(completion.data.choices)
    console.log("completion.data.choices")

    res.send(completion.data.choices[0].text);


  } catch (e) {
    console.log('chatgpt search result err' + e.message)
    res.send("No Result find:: " + e)

  }

  // console.log(completion.data.choices[0].text);
};

exports.cushman = async (req, res) => {

  console.log('****************deninc 00****************1')
  const completion = await openai.createCompletion({
    model: "code-cushman-001",
    prompt: req.query.query,
    temperature: 0.5,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(completion.data.choices[0].text);
  res.send(completion.data.choices[0].text);
};

exports.dev1 = async (req, res) => {

  console.log("&*******  code-davinci-001   *******")
  const completion1 = await openai.createCompletion({
    model: "code-davinci-001",
    prompt: "promisify a function js",
    temperature: 0.5,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(completion1.data.choices[0].text);
  res.send(completion1.data.choices[0].text);
};

exports.text3 = async (req, res) => {
  console.log("&*******  text   *******")
  const completion2 = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "promisify a function js",
    temperature: 0.5,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(completion2.data.choices[0].text);
  res.send(completion2.data.choices[0].text);
};

exports.google = async (req, res) => {

  console.log(req.query.query);
  const request = require('request');
  request('https://www.googleapis.com/customsearch/v1?key='
    + dbConfig.gkey + '&' + dbConfig.gengine + '&q=' + req.query.query, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      if (error) res.send(error.message);
      else
        res.send(body);

    });

  // axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAp_SqsLEmTmNLFAl_bx8m9o09x1pFS4AA&cx=c1481ff3e3be545b2&q=lectures')


};


