import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

let params = {
  email: "test@gmail.com",
  comment: "User's comment"
};

async function fetchData(url, body = {}) {
  return await axios.post(url, body);
}


export {
  fetchData,
  BASE_URL,
  params
};
