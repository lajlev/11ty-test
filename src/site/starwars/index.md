---
layout: layouts/base.html
---
# Star Wars Films

{% for movie in starwarsMovies %}
  [{{ movie.title }}]( {{ movie.title | slug | prepend: '/starwars/' | url }} )
{% endfor %}