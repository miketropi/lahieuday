const qs = require('qs');
const ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

const _request = async (url) => {
  const result = await fetch(url);
  return await result.json();
}

const getPosts = async () => {
  const query = qs.stringify({ populate: '*', }, {  encodeValuesOnly: true });
  return await _request(`${ ENDPOINT }posts?${ query }`);
  
}

const getPost = async () => {

}

export { getPosts, getPost };