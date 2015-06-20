---
layout: default
title: Home
permalink: /
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
      {{ post.excerpt }}
    </li>
    <hr/>
  {% endfor %}
</ul>
