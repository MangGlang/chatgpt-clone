import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    // pass api key to access 
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default openai;