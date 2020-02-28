# Star Wars Films

{% for movie in starwarsMovies %}
  [{{ movie.title | url }}](/starwars/{{ movie.title | slug }} )
{% endfor %}