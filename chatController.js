const dbConfig = require("./db.js");
const axios = require('axios');
const {Configuration,OpenAIApi} = require("openai")

const request = require('request')
const configuration = new Configuration({
    organization: dbConfig.org,
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: dbConfig.chatkey

});
const openai = new OpenAIApi(configuration);

exports.dev2 = async(req, res) => {

    console.log('****************deninc 00****************2')
    const completion = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: "promisify a function",
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
};

exports.cushman = async(req, res) => {

    console.log('****************deninc 00****************2')
    const completion = await openai.createCompletion({
      model: "code-cushman-001",
      prompt: "promisify a function",
      temperature: 0.5,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);
    res.send(completion.data.choices[0].text);
};

exports.dev1 = async(req, res) => {

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

exports.text3 = async(req, res) => {
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

exports.google = async(req, res) => {
 
    
    const request = require('request');
    request('https://www.googleapis.com/customsearch/v1?key='+dbConfig.gkey+'&'+dbConfig.gengine+'&q=what+is+promisify', function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.send(body)
    });

    // axios.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAp_SqsLEmTmNLFAl_bx8m9o09x1pFS4AA&cx=c1481ff3e3be545b2&q=lectures')
    

};


