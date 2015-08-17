---
layout: post
title:  "How Do I Know If I'm Making Things Too Difficult?"
date:   2015-08-16
categories:
---

## How This All Feels

Writing this post honestly feels a little scary. I like to think of myself as an okay front-end person, or at least someone who can find the answers to problems quickly. But sometimes the problems that seem easy take me a long time to figure out. The [nerd stuff](#nerd-stuff) section of this post is an example of these problems. There is a chance that you might think that the fact that I have these problems means I have no talent and should give up. Well, feel free to write a response if you feel that way, but I'm not writing this for you (asshole). I share these problems because I know I can't be the only one who spends hours on the seemingly easy parts.

What I have found is that the problems you find difficult today are the easy ones tomorrow. Reading, hearing, or watching something that makes you realize "oh, I don't really do this right, but now I know how to do it better" is awesome and embarrassing. The work you do today will be the worst thing you've ever seen six months from now. That's not a bad thing. You feel that way because you're growing.

While writing this post I think I figured out the answer to the title of this post. I won't know if I'm making things more difficult than they need to be until I know. Maybe the hunger for knowledge is more important than the knowledge itself.


## Nerd Stuff

Okay, let's get into the example.

<code>Pace = Distance / Time</code>

The equation is easy enough to follow. To calculate running pace, input the distance you ran and the time it took you. The application should be what, three lines of code? I have searched around the web enough times for a tool that can do this task for me that I decided to build one myself. Though it wasn't extremely hard, the task look longer than I would have liked. I'll share what I struggled with. But first, here is the final solution:

[[PACE CALCULATOR]]

### Debugging

I started the design process for this app in the browser on [CodePen](codepen.io). I based the design closely off of other pace calculators, like the ones on [Cool Running](coolrunning.com/) <span style="color:red">[AND OTHERS]</span>. I threw three inputs on the page and a placeholder to print what the values of my variables are.

[[First iteration]]

That was basically it for design (some sketches preceded it; I'll talk about my design process in another post). I would pretty it up later, but I had the shell of my application done in three lines of code. (NEEDLE SCRATCH). Why would I put a placeholder on the page to print the value of my variables? There must be a better way to debug my app, right? This is where my first knowledge gap occurred.

I learned programming using VB.NET in Visual Studio. The tools I had at my disposal early on allowed for some serious debugging. Writing separate classes, setting breakpoints, and seeing a console with my variables made it easy to know what was going on. Debugging JavaScript is less clear.

Breakpoints can be set in Chrome's (and other's) developer tools. The tool is good and does all I need it too. I guess for me I'd rather have the tools in the tool. Or maybe it's simply education. No JavaScript book, article, or online class really exposed me to the developer tools. They always suggest the student <code>console.log()</code> stuff to see the result. That seems very clunkly. If I'm going to have to add junk to my code I'd rather have it print on the page so I don't have to open dev tools every time I view the page.

<script src="/js/breakpointtest.js" async></script>
<noscript>You can't see the script I'm talking about</noscript>

So I ask, am I making debugging too difficult? Is becoming more proficient in the dev tools the answer or is there something better.

### Decimals and Time

Time is a difficult thing to work with in my experience so far. It's this weird thing that most often uses 60 as a base and is different all around the world. Luckily this application does not require any calculations for timezones or am/pm. However, I did need to figure out how to build around time not working out to clean decimals. What I mean by that is if you take an input of 1 hour and 30 minutes you first calculate total minutes. Easy enough, 90. From there you'll have to divide that by the total distance, let's say 12. Numerically you end up with 7.5. If we were dealing with numbers that's not a problem. But converting it back to time was a pain for this non-CS major.

I first figured out how to separate the decimal from the whole number. While trying to write my own [FizzBuzz](thing), I stumbled across an operator I had never seen before. It is called the <span color="red">I DON'T KNOW WHAT IT IS CALLED</span> and it is represented like this <code>%</code>. This, my friends is what I call a thingy. It happens to be a powerful thingy. The operation takes the first number and <span color="red">DOES SOME STUFF BLAH BLAH</span>.

After getting a better understanding of what the <SPAN COLOR="RED">THINGY</span> does I separated the minutes from the seconds and came up with the following logic:

[[FIGURE OUT THE LOGIC]]

It was a couple hours of work and research just to do the most simple math with time. I'm proficient with JavaScript that helps build front-ends, but need more education with more hardcore math stuff. Still, the task seemed trivial when I first approached it. Someone must have an easier way, right? Or perhaps this difficulty is the reason programmers are in such high demand.
