---
layout: layouts/base.html
---
## Players
Data from Directus [http://167.172.169.215/lillefar/items/players?fields=name,birthday](http://167.172.169.215/lillefar/items/players?fields=name,birthday)

---
{% for player in players.data %}
  - {{ player.name}}
  - {{ player.birthday}}

---
{% endfor %}