---
layout: post
title:  "Four Hundred Four"
date:   2015-06-27
categories:
---
The default 404 page of a GitHub pages site has nothing to do with that site. Keeping the default could be confusing for people who go to a page that doesn't exist. I wanted to create a [404 page](http://benjaminjoyce.com/404) that made it easy for visitors to get back to a familiar place. I also wanted to add a little personality to that page. Here is how I did it.

First, I found the official [documentation](https://help.github.com/articles/custom-404-pages/) on GitHub. I got the page running locally and started to think about what I wanted to put up. There was an old [pen](http://codepen.io/benjoyce/pen/myqxad) that featured an SVG illustration I did of Beaker from the Muppets.

<p data-height="673" data-theme-id="16322" data-slug-hash="myqxad" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/myqxad/'>Beaker</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

I wrote a [post](http://codepen.io/benjoyce/blog/quick-smil-animation-tip) on my [CodePen blog](http://codepen.io/benjoyce/blog/) about the specifics of creating the animations in the pen. You should read that if you've never used SMIL before.

I thought re-purposing that work would be perfect for the 404 page. It is a fun showcase of what is possible with SVG and was a good reflection of my personality. Unfortunately, taking the pen and jamming it onto my site wouldn't work. The image didn't look anything like the rest of my site. It also didn't provide an easy way to include text that would bring the user back to a relevant page. Still, I tried something.

<p data-height="674" data-theme-id="16322" data-slug-hash="839684737b2e43f6bf64ce133becf63f" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/839684737b2e43f6bf64ce133becf63f/'>Beaker Fork</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

I pushed that version and realized quickly that it was weird and would not work. My guess is that most people are going to view my site on a small device. This giant image and overlay text worked, but looked pretty junky.

The imagine had to be scaled down and fit inside the page. Making the change was a bit of a pain due to my approach to the original build. Each component was its own SVG. I did this so that I could manipulate the position and size with CSS. The new design required the whole scene to scale together. I could have gone through and set everything to get my desired result, but that would have been more effort than just recreating the scene as one SVG.

So that's what I did. I do all my SVG illustration in Illustrator. I fired open the program and got to work. After putting the illustration together I exported it over to a pen on CodePen. Seeing changes is helpful to me when working with animations. However, it's still not ideal. I haven't come across an easy way to navigate through large SVGs. Figuring out which <code>&lt;path></code> or <code>&lt;circle></code> I should be adding a class to is painful. If you're working with a large SVG file I think you just have to deal with it. Knowing what the color is for the fill or stroke of the elements within the SVG is the most helpful way to navigate.

The animations I used were the same as the original pen. I had to make Beaker's mouth open again, but this time I knew how. One piece I'm still working on is the initial explosion. I left that as a separate SVG. I haven't fully determined how I want that to look. Right now it explodes in the middle of the screen on some devices and a random place on others. I made sure to set <code>pointer-events: none</code> on the explosion so the links to the home and about page still worked. Be sure to set your pointer event to none if there is something that takes up the full screen.

I'm pretty happy with the [final result](http://benjaminjoyce.com/404). I think 404 pages should be unique, but feel cohesive with the rest of the site.

Let me know if you've done something interesting with your 404 page. The best place to get in touch is tweeting me [@BenJoyceCT](https://twitter.com/BenJoyceCT).
