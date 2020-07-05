---
layout: default
title: Home
subtitle: (a little of everything)
permalink: /
---
{% include herotitle.html %}
<div class="summary-card-wrapper">
  {% for post in site.posts %}
    {% if post.categories contains "Quote" %}
      <div class="summary-card--quote">
        {{ post.excerpt }}
      </div>
    {% elsif post.categories contains "Illustration" %}
      <div class="summary-card">
        <h1 class="summary-card__heading"><a class="card__link" href="{{post.url}}">{{ post.title | truncate: 20 }}</a></h1>
        <p></p>
        <div class="card__image">
          <img src="{{ post.image }}" />
        </div>
        {% if post.categories != blank %}
          <ul class="tags">
            {% for categories in post.categories %}
              <li class="tag">{{categories}}</li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
    {% else %}
      <div class="summary-card">
        <h1 class="summary-card__heading"><a class="card__link" href="{{post.url}}">{{ post.title | truncate: 20 }}</a></h1>
        <p>{{ post.excerpt }}</p>
        <p><a href="{{post.url}}">Read more</a></p>
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
</div>
