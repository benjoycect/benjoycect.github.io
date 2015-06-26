---
layout: post
title:  My Gruntfile
date:   2015-06-25
categories:
---
I'm using some [Grunt](http://gruntjs.com/ "Grunt") tasks that have helped me get this site running. They have also made my life way easier. A few caveats before we get started. One, I know Grunt isn't the super cool task runner it was when it was first released. [Gulp](http://gulpjs.com/ "Gulp") has earned that distinction from most developers I talk to now. [Enough](https://medium.com/@preslavrachev/gulp-vs-grunt-why-one-why-the-other-f5d3b398edc4) has been [written](http://www.hongkiat.com/blog/gulp-vs-grunt/) about [Grunt versus Gulp](http://sixrevisions.com/web-development/grunt-vs-gulp/) that I don't need to go into that. I've tried both. I started with Grunt, thanks to Chris Coyier's awesome 24 Ways [article](http://24ways.org/2013/grunt-is-not-weird-and-hard/). I like it and I'm staying with it for a while. Another quick note, I have an extremely basic website right now. I haven't added any images (yet) and there is basically no interactivity. Finally, I'm not going to teach you how to use Grunt. The previously mentioned article by Chris Coyier does it better than I ever could.

Okay? Good? Let's see that <code>Gruntfile.js</code>!
<pre><code>
module.exports = function(grunt) {
    grunt.initConfig({
      sass: { // Task
        dist: { // Target
          options: { // Target options
            style: 'compressed'
          },
          files: { // Dictionary of files
            'css/main.css': 'sass/main.scss' // 'destination': 'source'
          }
        }
      },
      svgstore: {
        options: {
          prefix: 'shape-', // This will prefix each <g> ID
        },
        default: {
          files: {
            'img/svgs/svg-defs.svg': ['img/svg-src/[an asterisk goes here].svg'],
          }
        }
      },
      autoprefixer: {
        dist: {
          files: {
            'css/build/main.css': 'css/main.css'
          }
        }
      },
      criticalcss: {
        custom: {
          options: {
            url: "http://127.0.0.1:4000",
            width: 3000,
            height: 2000,
            outputfile: "css/build/critical.css",
            filename: "css/build/main.css", // Using path.resolve( path.join( ... ) ) is a good idea here
            buffer: 800 * 1024,
            ignoreConsole: false
          }
        }
      },
      watch: {
        files: ['img/svg-src/[an asterisk goes here].svg', 'sass/[an asterisk goes here]'],
        tasks: ['svgstore', 'sass', 'autoprefixer', 'criticalcss']
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-criticalcss');
    grunt.registerTask('default', ['sass', 'autoprefixer', 'criticalcss']);
    };
</code></pre>
So you'll notice pretty quickly that I'm using five tasks. I'll talk about each one and the settings that got me confused.

### [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)

I have been writing all my style code in [Sass](http://sass-lang.com/) for about two years. If you're writing your stylesheets in CSS, stop and learn Sass. It will save you a ton of time and your code will be much easier to read. I'm not going to go into the intricacies of Sass. I recommend the courses on [Treehouse](https://teamtreehouse.com) if you want to learn Sass.

Sass is a preprocessor for CSS. Preprocessors introduce a level of abstraction that makes CSS way easier to write.

Having the abstraction comes at a bit of a cost though because you have to compile it to code that the browser can read. Having a task runner makes compiling the code super easy. After installing grunt-contrib-sass, I went to the <code>files</code> block and set <code>'css/main.css': 'sass/main.scss'</code> <code>'css/main.css'</code> is the final stylesheet that my site uses and <code>'sass/main.scss'</code></pre> is the location of the <code>.scss</code> file that contains all of the necessary <code>@import</code> declarations for my Sass partials. Now, this pattern of <code>destination : source</code> is one I find a little weird, but see in many tasks. I remember by thinking "this thing works by getting stuff from : this thing." I'm sure there is a good reason for the pattern, but I have no idea.

The other piece of grunt-contrib-sass that is important is the <code>style</code> declaration. I started looking all [npm](https://www.npmjs.com/) for a good CSS minifyier until I finally realized the Sass task does it for you. Just make the style <code>compressed</code> and you're all set. You should minify. No one needs to look at your production stylesheet and it reduces file size a pretty significant amount.

### [grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)
This method is another Chris Coyier special. Go check out the article about this method, [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/). The article explains about all you need to know. I've liked working with this approach. But, I have noticed it's a little weird to add classes to specific parts of one of the SVGs in the sprite.

Just be sure to plan ahead before you combine the files into one. You're production SVG file will be overwritten every time you add a new file. Make sure those classes and animations live in the individual file, pre-combination.

### [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
The first thing you notice when you get to the page for Autoprefixer is a message to use PostCSS instead. I've heard good things about PostCSS, but I haven't explored it too much yet. It's on my list of tools to learn more about, but here is what I know: Autoprefixer works.

Autoprefixer is crucial to making sure my site works on a bunch of different browsers. It uses information from [Can I use...](http://caniuse.com/) to determine when to add [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) to different CSS properties. Use this tool if you want your site to look reasonable in other browsers. It takes almost no extra work (besides testing, you should still be testing).

### [grunt-criticalcss](https://github.com/filamentgroup/grunt-criticalcss)
I strongly recommend you read [How we make RWD sites load fast as heck](https://www.filamentgroup.com/lab/performance-rwd.html) written by Scott Jehl. It has been about a year since that article came out and I still use many of the ideas from it today. Thinking about critical CSS is one of those ideas.

Right now, my site is tiny. I'm able to inline my whole style sheet, besides the request for the font files from Google. Still, my the home page still gets delivered in less than 6kb (gzip). I don't really need to worry about critical CSS right now. Soon my site and stylesheet will get into territory that makes it more than one http request. I have this task running in preparation for that day.

I do have a few things to say about grunt-criticalcss. It's not perfect. I set the <code>width</code> and <code>height</code> declarations to some pretty massive values. Still, the page still looked super broken on first paint. I recommend using this task as a starting point and then taking a bit of time to use your brain to figure out what else needs to be included inline.

### [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
Having something watch your files is pretty necessary for any task runner. Having Watch running will allow you to not have to worry about typing <code>grunt</code> every time you want to preview your site.

### Final Thoughts
There are many easier options to get a website up and running. But there is something special about crafting something from nothing and making it yours. Task runners make the process of creating a site "from scratch" much smoother. This is my approach to Grunt and it's not perfect. Keep an eye on the site for updates about my Grunt process, deeper dives into the reasons for each task, and inevitably, my switch to Gulp.

If you have any questions or feedback, shoot me a tweet [@BenJoyceCT](https://twitter.com/BenJoyceCT).
