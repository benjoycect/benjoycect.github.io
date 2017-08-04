---
layout: default
title: Home
permalink: /
---
<section class="home-page__blurb row">
  <h1 class="home-page__heading">Hi, I'm Ben.</h1>
  <p class="home-page__blurb-text">I'm a designer with an eye on the future. I have researched and created things for companies big and small. I love getting deep into a problem and working with teams to create awesome solutions.</p>
</section>
<section class="home-page__previews row">
  {% for post in site.posts %}
    {% if post.categories contains "Quote" %}
      <div class="card--quote">
        {{ post.excerpt }}
      </div>
    {% else %}
      <div class="card">
        <h3 class="work__heading"><a class="card__link" href="{{post.url}}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt }}</p>
        {% if post.categories != blank %}
          <ul class="tags">
            {% for categories in post.categories %}
              <li class="tag">{{categories}}</li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</section>
