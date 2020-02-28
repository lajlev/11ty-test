const fetch = require('node-fetch');

module.exports = async function() {
	let resp = await fetch('https://swapi.co/api/films/');
	let starwarsMovies = await resp.json();
	return starwarsMovies.results;
};