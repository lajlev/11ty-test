var axios = require('axios');

module.exports = async function() {
  let url = 'http://167.172.169.215/lillefar/items/players?fields=name,birthday';

  return axios.get(url)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error){
      console.log(error);
    })
}