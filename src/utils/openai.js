import Groq from "groq-sdk";
import { groqApiKey } from './constants';

const groq = new Groq({
   apiKey: groqApiKey,
   dangerouslyAllowBrowser: true
   });

export default groq;
