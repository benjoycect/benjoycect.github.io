---
layout: default
title: Posts
subtitle: (the writings)
permalink: posts
---
{% include herotitle.html %}

<div class="one-column-body-wrapper">
  <ul class="table-of-contents">
  {% for post in site.posts %}
    <li class="table-of-contents__item">
      <p>{{ post.date | date: "%b %-d, %Y" }}</p>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
</div>
