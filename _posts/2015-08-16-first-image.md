---
layout: post
title:  "First Image"
date:   2015-08-16
categories:
---
I just set up an account on AWS and will be using [CloudFront](https://aws.amazon.com/cloudfront/) CDN for images. I'll write about getting CloudFront set up and some of the things I am trying out with <code>srcset</code> very soon.

<div style="text-align:center">
<img src="http://images.benjaminjoyce.com/EarthRise.jpg"
     srcset="http://images.benjaminjoyce.com/EarthRise.jpg 1024w, http://images.benjaminjoyce.com/EarthRise.jpg 640w, http://d3p41d0ahmxvrr.cloudfront.net/Mom-400.jpg 320w"
     sizes="(min-width: 36em) 33.3vw, 100vw"
     alt="My mom, sister, and me">
</div>

Image: [Earth Rise as Seen From Lunar Surface](https://flic.kr/p/8GrsJ6) from [NASA on The Commons](https://www.flickr.com/photos/nasacommons/); <em>Altered for speed performance</em>
