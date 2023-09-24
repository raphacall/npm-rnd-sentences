import fetch from "node-fetch";
const API = 'https://raw.githubusercontent.com/raphacall/npm-rnd-sentences/main/src/sentencesAPI.json';

const fetchSentences = async (url) => {
    try {
        const sentencesJson = await fetch(url);
        const sentences = await sentencesJson.json();
        return await sentences;

    } catch (error) {
        console.error('aja' + error);
    }
}
const rndSentenceGenerator = async (url,callback) => {
    const sentences = await callback(url);
    //console.log(sentences);
    const rnd = await Math.floor(Math.random() * sentences.length);
    await console.log(`\n${sentences[rnd].sentence}\n      ${sentences[rnd].author}\n`);

}
module.exports = {
     rndSentenceGenerator
}