---
layout: post
title:  "My CSS Mistakes"
date:   2015-07-25
categories:
---
For a long time CSS was really confusing to me. I was shocked after every line of code I wrote. Text flowed outside its container, things didn't position themselves like I expected, and elements I expected to be center sat on the left side of the page. These problems left my CSS with <code>!important</code> declarations and hacks to make things look right. This is my post that would have taught past me how to fix those mistakes and where to get more information. Maybe you have the same problems and this post will help you too.

## Height

The other day a friend asked me why part of the text in one of his text inputs was hidden. He accidently set a height on his <code>&lt;input></code> elements. This isn't a problem unique to first-time front-end developers. It feels good to set a height on elements. However, setting an explicit height can cause trouble later if you're not careful.

First, let's take a look at my friend's example with the <code>input</code> (note that you won't notice anything wrong in Chrome or desktop Safari, but keep reading).

<select style="font-size:20px; height: 18px; margin-left: 40%; width: 20%;">
  <option>Apples</option>
  <option>Oranges</option>
  <option>Bananas</option>
</select>

To understand what is happening we need to get into the box model. If you've never heard of the box model, stop and read [The CSS Box Model](https://css-tricks.com/the-css-box-model/) on CSS-Tricks. When content is driving the size of the box, padding, border, and margin are calculated based on the edges of the content.

<p data-height="268" data-theme-id="16322" data-slug-hash="986e518c542049dca4bdcf80c5b6a73e" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/986e518c542049dca4bdcf80c5b6a73e/'>Normal Box</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Setting an explicit height ignores the content and will make the box the size set in the CSS. I didn't change the padding, border, or margin from the previous example. I did add a height. You can see that the content is now overflowing from the box (that is because the [default](https://bocoup.com/weblog/new-overflow-default/) is <code>overflow: visible</code>). Additionally, the bottom border and the bottom margin are being calculated based on the new position of the bottom of the box.

<p data-height="216" data-theme-id="16322" data-slug-hash="cd4f283aaff1e8ec3515ef2f84608b6e" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/cd4f283aaff1e8ec3515ef2f84608b6e/'>Height Box</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

But let's say you know you need something to be a certain height. There are a few options. First, you can use the <code>overflow</code> [property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow). Setting <code>overflow-y</code> to <code>scroll</code> might be a tempting solution in our example above. This solution should be avoided in most situations. Imagine scrolling down a webpage only to be stuck in a content box that has its own scroll. An [answer](http://ux.stackexchange.com/questions/58499/in-page-scrollbars-yes-or-no-or-maybe/#answer-58551) by [alexeypegov](http://ux.stackexchange.com/users/21165/alexeypegov) on UX StackExchange has some good examples of when it might be okay to use <code>overflow-y: scroll</code>:

<blockquote>
  <ol>
    <li>
    You may use nested scrolling panes if they're shown temporary (like in Facebook example you've mentioned in your question: the scrolling list in popup which is shown for a moment and will not break the page scrolling itself).
    </li>
    <li>
    Editable areas like comments may be scrolled while being edited (and reverted back to non-scrollable mode then editing is done).
    </li>
    <li>
    Web apps which may occupy the whole browser window and avoid scrolling of the content by using dynamic layout so it's OK to use nested scrolling panes (since main content area could never be scrolled anyway).
    </li>
  </ol>
</blockquote>

Besides overflow, [flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) solves many challenges developers have with height. For example, equal height columns can be done with only [one line of code](http://clearleft.com/thinks/270).

<p data-height="268" data-theme-id="16322" data-slug-hash="949835e2077b5e45aab26aadc2967c71" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/949835e2077b5e45aab26aadc2967c71/'>Equal Height Columns</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

You can also consider letting the height be driven by the content. The W3C specs are basically written to support content-driven boxes. Letting the content drive the height will save you many headaches down the road.

Finally, you can set a height that fits your content. The most important thing is being intentional with height. Knowing how setting a height will affect your site is powerful knowledge.

## Position

Document flow is tied with the box model for the CSS concepts I think are most important. Tuts+ has a great article on normal document flow, [Quick Tip: Utilizing Normal Document Flow](http://webdesign.tutsplus.com/articles/quick-tip-utilizing-normal-document-flow--webdesign-8199). In the article they describe normal document flow as

<blockquote>
[H]ow a page is presented when you do nothing to it with regard to structural styling.</blockquote>

The [first web page](http://info.cern.ch/hypertext/WWW/TheProject.html) is a great example of normal document flow. You can see that nothing sits on the same line as the <code>&lt;h1></code> of the page. The default display value for a <code>&lt;h1></code> is <code>block</code>. The inverse is true for the <code>&lt;a></code> tags that appear within the first paragraph. <code>&lt;a></code> tags have a default display value of <code>inline</code>.

Confusion can occur when things are both in the normal document flow and outside of it. Not understanding this property may result in undesirable results. For example, you will be disappointed if you add an absolutely positioned logo at the top of the page and expect your navigation to sit next to the logo.

<p data-height="234" data-theme-id="16322" data-slug-hash="30cff6e84d84ee78728ad4509720fe37" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/30cff6e84d84ee78728ad4509720fe37/'>30cff6e84d84ee78728ad4509720fe37</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Whoops, why are things sitting on top of each other? Well, elements in the normal document flow are ignoring the heart logo since it was taken out of the normal document flow.

[Guil  Hernandez's](https://twitter.com/guilh) course on [Treehouse](teamtreehouse.com), [CSS Layout Techniques](http://teamtreehouse.com/library/css-layout-techniques) is one of the best explanations for layout complexities that I have come across. Treehouse costs a few bucks a month, but it worth the price of admission. Consider taking his course if you find stuff isn't laying out like you want.

## Center Alignment

Center alignment was one of those things that I had to look up every time for a long time. Not even vertical alignment, which can be solved [in three lines](http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/) or [by flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/). There are a bunch of techniques for centering. Each is used for different situations.

There are four basic ways to horizontally center items:

* For block-level containers [text-align: center;](https://css-tricks.com/almanac/properties/t/text-align/) will center that container's inline or inline-block elements
* For absolutely positioned elements with a known or unknown width [left: 0; right: 0; margin-left: auto; margin-right: auto;](https://teamtreehouse.com/forum/centre-align-an-absolute-positioned-element-with-unknown-width) will center that element
* For block-level elements with a width margin-left: auto; margin-right: auto; will center that element and its content
* For parent elements that are [display: flex;](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), justify-content: center; will center all child elements

Here is everything in action:

<p data-height="156" data-theme-id="16322" data-slug-hash="3b11a5a3f76e7b2c461fc72406647957" data-default-tab="result" data-user="benjoyce" class='codepen'>See the Pen <a href='http://codepen.io/benjoyce/pen/3b11a5a3f76e7b2c461fc72406647957/'>3b11a5a3f76e7b2c461fc72406647957</a> by Ben Joyce (<a href='http://codepen.io/benjoyce'>@benjoyce</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

For more on centering, check out [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/_) on CSS-Tricks.

## Conclusion

Even the most simple display tasks can be difficult in CSS. Don't worry if you have to look up how to do something once or twenty times. Everyone is learning together. Visit the sites I link to throughout this article if you're having any of these problems. Or contact me on Twitter [@BenJoyceCT](https://twitter.com/BenJoyceCT) and I can try to help. Let me know if you notice any issues with the article. Best of luck!
