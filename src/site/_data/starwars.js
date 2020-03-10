var axios = require('axios');

module.exports = async function() {
  let url = 'https://swapi.co/api/films/';

  return axios.get(url)
    .then(function(response) {
      return response.data.results;
    })
    .catch(function(error){
      console.log(error);
    })
}