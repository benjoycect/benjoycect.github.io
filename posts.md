---
layout: default
title: Posts
subtitle: (the writings)
permalink: posts
---
{% include herotitle.html %}

<div class="one-column-body-wrapper">
  <ul>
  {% for post in site.posts %}
    <li>
      <p>{{ post.date | date: "%b %-d, %Y" }} <a href="{{ post.url }}">{{ post.title }}</a></p>
    </li>
  {% endfor %}
</ul>
</div>
