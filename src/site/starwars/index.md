---
layout: layouts/base.html
---
## Test
Data from Starwars API [https://swapi.co/api/films/](https://swapi.co/api/films/)
{% for movie in starwars %}
  [{{ movie.title }}]({{ movie.title | slug }})
{% endfor %}