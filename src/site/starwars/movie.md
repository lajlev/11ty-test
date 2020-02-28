---
pagination:
    data: starwarsMovies
    size: 1
    alias: movie
permalink: starwars/{{ movie.title | slug }}/index.html
layout: layouts/base.html
---

# {{ movie.title }} 
**Released: {{ movie.release_date }}**

{{ movie.opening_crawl | starwarsify }}