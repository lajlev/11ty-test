# Star Wars Films

{% for movie in starwarsMovies %}
  [{{ movie.title }}](/starwars/{{ movie.title | slug }} )
{% endfor %}