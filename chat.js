import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-vQDH2tXi3bmmaAFaqmSrEI1l",
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: "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",

});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();