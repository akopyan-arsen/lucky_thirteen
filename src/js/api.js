import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

let params = {
  email: "test@gmail.com",
  comment: "User's comment"
};

async function fetchData(url, body = {}) {
  return await axios.post(url, body);
}

function updateEmailValue(email) {
    params.email = email;
  }
  
  function updateCommnetValue(comment) {
    params.comment = comment;
  }

export {
  fetchData,
  BASE_URL,
  params,
  updateCommnetValue,
  updateEmailValue
};
