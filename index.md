---
layout: default
title: Home
permalink: /
---

<ul class="article__list">
  {% for post in site.posts %}
      <li class="article--teaser">
      <a href="{{post.url}}">
        <h2 class="article__title-card">
              <span class="article__title">{{ post.title }}</span>
              <span class="article__date">Published on {{ post.date | date: "%b %-d, %Y" }}</span>
          </h2>
        {{ post.excerpt }}
        </a>
      </li>

  {% endfor %}
</ul>
