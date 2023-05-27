import 'dotenv/config';
import { OpenAI } from "langchain/llms/openai";

const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY!, temperature: 0.9 });

const res = await model.call(
  "How can i go to moon and eat food"
);
console.log(res);