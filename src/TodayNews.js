import APIKEY from '../configkeys.js';

const searchURL="http://newsapi.org/v2/everything?q=Juice%20WRLD&from=today&sortBy=publishedAt&apiKey="

const url =searchURL+APIKEY;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}