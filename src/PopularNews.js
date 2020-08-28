import APIKEY from '../configkeys.js';

const searchURL="https://newsapi.org/v2/everything?q=JUICE%20WRLD&sortBy=popularity&apiKey=";

const url =searchURL+APIKEY;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}