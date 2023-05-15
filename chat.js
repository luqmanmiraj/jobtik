import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    // organization: "org-vQDH2tXi3bmmaAFaqmSrEI1l",
    organization: "org-yuPvXWhlt5Nvw57JcpouClPa",
    // apiKey: process.env.OPENAI_API_KEY,
    // apiKey: "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",
    apiKey: "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",

});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();