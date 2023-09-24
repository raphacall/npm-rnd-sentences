import fetch from "node-fetch";
export const API = 'https://raw.githubusercontent.com/raphacall/npm-rnd-sentences/main/sentencesAPI.json';

export const fetchSentences = async (url) => {
  try {
    const sentencesJson = await fetch(url);
    const sentences = await sentencesJson.json();
    return await sentences;

  } catch (error) {
    console.error('Error: ' + error);
  }
}
export const rndSentenceGenerator = async (url, callback) => {
    const sentences = await callback(url);
    // console.log(sentences);
    const rnd =  Math.floor(Math.random() * sentences.length);
    console.log(`\n\x1b[34m${sentences[rnd].sentence}\n      ${sentences[rnd].author}\x1b[89m\n`);

}