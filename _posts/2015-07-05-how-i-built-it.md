---
layout: post
title:  "How I Built It: Fourth of July"
date:   2015-07-05
categories:
---
This is the first of my planned "walk through" posts. Today I'm writing about the process I went through to create the pen I made for the Fourth of July.

I learned a few key points during this exercise. You can skip ahead to one of them if you're interested.

* [Picking colors and a design](#design)
* [SVG fill](#fill)
* [Sass loops](#loop)
* [filter: drop-shadow](#shadow)

Before we dive in, here is the final:
<p data-height="809" data-theme-id="16322" data-slug-hash="gpvzNK" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/gpvzNK/'>Fourth of July</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Okay, cool. Go America! Let's learn something.

<h3 id="design">Picking colors and a design</h3>
Inspiration for this pen came from a question asked at trivia last week. The final question asked us to list 11 of the 13 original US colonies. We were able to do it, but I struggled more than I thought I would. So I decided my next SVG exercise would also be a history lesson.

I started by finding a [US map](https://commons.wikimedia.org/wiki/File:Blank_US_Map.svg). The [Wikipedia Commons](https://commons.wikimedia.org/wiki/Main_Page) has a ton of SVG files. Although they are a good starting point, most of them are not optimized. This particular file is massive. 79kb for one SVG probably means that there are a ton of points. The computer has to calculate and display each point. More calculations means more tax on your processor. Going to production with a file this large may result in a negative experience for your users. [SVG is for everybody] (https://css-tricks.com/video-screencasts/137-svg-is-for-everybody/), but be careful.

Once I had the map I had to figure out what I wanted to do with it. I dropped it in CodePen and started messing around. For these types of fun exercises I often go to  [Dribbble](https://dribbble.com/) and look for inspiration. I typed "USA" into the search bar on Dribbble and started flipping through examples. I lifted the red in my example from [Zach Grahm's](https://dribbble.com/zgraham) shot, [That One Place](https://dribbble.com/shots/973557-That-One-Place). I tried filling the background with red, but that looked pretty junky with the map on top. I held onto the red until I knew exactly what I was doing with the map.

I couldn't find anything on the web that gave me inspiration for how to fill the states. I decided that the stars from the flag would look cool. I created a small SVG file containing a star on a blue background. I played with the colors I had chosen in Illustrator to make sure that they would work well together. From there I had to figure out how to get the stars into the states.

<h3 id="fill">SVG Fill</h3>

If you have used an SVG then you have used the <code>fill</code> property. <code>Fill</code> determines what happens inside of the thing that is defined by points. Right or wrong, I think of <code>fill</code> in the same way I think of <code>background</code> in CSS. If you're just working with a color, then <code>fill</code> is pretty similar to <code>background</code>. However, things get a little different once you start introducing images.

The first thing to know is that the definition of your image source must happen in the <code>&lt;defs></code> tag. <code>&lt;defs</code> are inserted right after the opening <code>&lt;svg></code> tag. Here is how my <code>&lt;defs</code> looks:
<pre>
<code>
&lt;defs>
    &lt;pattern height="150" id="img1" patternUnits="userSpaceOnUse" width="150">
      &lt;image height="150" width="150" x="0" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/97391/star.svg" y="0"/>
    &lt;/pattern>
  &lt;/defs>
</code>
</pre>

There are four key pieces of the <code>&lt;pattern></code> definition to focus on. The first is the pattern <code>height</code> and </code>width</code>. You can think of these definitions as the size of the container that the image sits in. If you set the size of the pattern to anything larger than the size of the <code>&lt;image></code> there will be extra space around the image. I wanted the stars to be tight against each other. To make sure there was no extra space I set the <code>height</code> and <code>width</code> of the pattern and the image to the exact same value. You'll notice that these values do not have any unit definitions. Unit-less size definitions default to pixels throughout different parts of SVG markup.

An <code>id</code> must be defined for the pattern. The <code>id</code> is used later to reference the pattern from the <code>&lt;pattern></code> definition. I happened to use CSS to set the fill of the states. You will be able to reference the <code>id</code> from the CSS and the browser will know what to do with it.

<pre>
<code>
.state {
  fill: url(#img1);
  fill-opacity: 0;
  stroke:#f5f5f5;
  stroke-width:1;
  stroke-opacity:1;
}
</code>
</pre>

This is a good time to mention an interesting feature about using patterns for fills in SVG. The pattern will repeat itself how you would expect. In my SVG file there are multiple states. Each state has a separate <code>&lt;path></code> definition. Still, the single image defined in the pattern repeats itself across the patterns to form one, cohesive pattern. I don't know the technical details on how it works, but it does and it's cool.

The final thing I thought about in the definition is the <code>xlink:href</code>. The source can be any image file type that you would expect (.svg, .jpg, .png, etc.).

Just for reference, I dug into info on [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Patterns) and a question someone answered on [StackOverflow](http://stackoverflow.com/questions/3796025/fill-svg-path-element-with-a-background-image).

<h3 id="loop">Sass Loops</h3>

[Control directives](http://thesassway.com/intermediate/if-for-each-while) are one of my favorite reasons for using Sass. I have found <code>for</code> loops to be particularly useful. In this example I wanted to add a short time delay between each state increasing its <code>fill-opacity</code>. There are a few ways to get this result. You could add a different class to each state and set the <code>animation-delay</code> to a slightly different value for each. That would be messy and take too much time.

The better option is to use [nth-of-type](https://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/) combined with a <code>for</code> loop. The loop I set up goes through each element with the class <code>state</code>. During the loop <code>$i</code> gets updated by 1. We can use the variable in multiple places. I use the same variable that gets updated during the loop to change the number in the <code>nth-of-type</code> psuedo class. I also use the variable in the <code>animation-delay</code> equation.

<pre>
<code>
@for $i from 1 through $states {
  .state:nth-of-type(#{$i}){
    animation: flash 1s linear 1 forwards;
    animation-delay: ($i*0.15)+s;
  }
}
</code>
</pre>

I think finding good ways to use control directives is the main benefit of these creative exercises. They allow you to think analytically and build good foundations for programming in the future.

<h3 id="shadow">Filter: drop-shadow</h3>

I never used the <code>drop-shadow</code> property before this exercise. It's an awesome way to do what you hoped <code>box-shadow</code> would do on your SVG. The difference is <code>drop-shadow</code> calculates the area of the element it is being applied to and acts accordingly.

You'll notice that in the example the shadow fits nicely around each state. Unfortunately that calculation comes at a processing cost. When I had the <code>drop-shadow</code> being applied immediately to each state it basically crashed the browser. That is because the browser was calculating where to put the points in the SVG, calculating the points that the drop shadow needed to go around, and running an animation. Even on my high-end device there were problems.

To fix the problem I added an animation to the drop shadow that was delayed by the time it took to fill each state plus a few milliseconds. The whole example is still expensive, but the delay helped quite a bit.

### Final Thoughts

If someone ever wanted a similar graphic on their site there are a few things to think about. The first, and most important, is the size of the SVG. The map does not need to be nearly as precise as the one I used. Think about using your design chops to find a solution that is smaller but conveys the same message. The other thing to remember is that some of this stuff is experimental. For example, <code>filter</code> seems to be forever messed up in IE. Always check [Can I Use](caniuse.com) before using any experimental properties.

Let me know if you need help with anything I mentioned above. Also, please let me know if you think something is inaccurate and I'll fix it. The best way to reach me is on Twitter [@BenJoyceCT](https://twitter.com/BenJoyceCT).
