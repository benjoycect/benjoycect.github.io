---
layout: post
title:  "Pace Calculator"
date:   2015-08-16
categories:
---
I created a small pace calculator for my own use. There are many TODOs, but let me know if something can be done better. I'll be open sourcing the project later this week. You can take a look at the first iteration of the solution here. Your [feedback](https://twitter.com/BenJoyceCT) is always welcome.

The constraints I put on myself were to use vanilla JavaScript, less than 3KB, and as few "wrapper divs" as I could get away with. I will be writing another post when the calculator is on GitHub.

<link rel="stylesheet" href="/css/build/calculator.css">
<script src="/js/paceCalculator.js"></script>
<div class="pace-calculator">
  <div class="input-container">
    <form class="pace-calculator__form">
      <section class="time pace-calculator__section">
        <label class="pace-calculator__label" for="hour">HOURS</label>
        <input class="pace-calculator__input" type="number" id="hour" placeholder="00" required />
        <span class="colon">:</span>
        <label class="pace-calculator__label" for="minute">MINUTES</label>
        <input class="pace-calculator__input" type="number" id="minute" placeholder="00" required />
        <span class="colon">:</span>
        <label class="pace-calculator__label" for="second">SECONDS</label>
        <input class="pace-calculator__input" type="number" id="second" placeholder="00" required />
      </section>
      <section class="distance pace-calculator__section">
        <label class="pace-calculator__label" for="distance">Distance</label>
        <input class="pace-calculator__input" type="number" id="distance" placeholder="00.00" required />
        <p>Mile(s)</p>
      </section>
    </form>
    <div class="output">
      <p class="output__label">Pace</p>
      <div class="output__value">
        <p class="output__pace output__pace--no-value" id="pace">00:00:00</p>
        <p>Per Mile</p>
      </div>
    </div>
  </div>
  <button id="process">Calculate Pace</button>
</div>

<h3>HTML</h3>
<pre>
<code>
&lt;div class="pace-calculator">
  &lt;div class="input-container">
    &lt;form class="pace-calculator__form">
      &lt;section class="time pace-calculator__section">
        &lt;label class="pace-calculator__label" for="hour">HH&lt;/label>
        &lt;input class="pace-calculator__input" type="number" id="hour" placeholder="00" required />
        &lt;span class="colon">:&lt;/span>
        &lt;label class="pace-calculator__label" for="minute">MM&lt;/label>
        &lt;input class="pace-calculator__input" type="number" id="minute" placeholder="00" required />
        &lt;span class="colon">:&lt;/span>
        &lt;label class="pace-calculator__label" for="second">SS&lt;/label>
        &lt;input class="pace-calculator__input" type="number" id="second" placeholder="00" required />
      &lt;/section>
      &lt;section class="distance pace-calculator__section">
        &lt;label class="pace-calculator__label" for="distance">Distance&lt;/label>
        &lt;input class="pace-calculator__input" type="number" id="distance" placeholder="00.00" required />
        &lt;p>Mile(s)&lt;/p>
      &lt;/section>
    &lt;/form>
    &lt;div class="output">
      &lt;p class="output__label">Pace&lt;/p>
      &lt;div class="output__value">
        &lt;p class="output__pace output__pace--no-value" id="pace">00:00:00&lt;/p>
        &lt;p>Per Mile&lt;/p>
      &lt;/div>
    &lt;/div>
  &lt;/div>
  &lt;button id="process">Calculate Pace&lt;/button>
&lt;/div>
</code>
</pre>

<h3>JavaScript</h3>
<pre>
<code>
document.addEventListener('DOMContentLoaded', function() {
  var pace = document.getElementById('pace'); // Get the pace input
  var processResult = document.getElementById('process'); // The main button
  var hours = document.getElementById('hour'); // Get the hour input
  var minutes = document.getElementById('minute'); // Get the minute input
  var seconds = document.getElementById('second'); // Get the second input
  var distance = document.getElementById('distance'); // Get the distance input

  // Watch for the process button to be clicked then run the function
  if(processResult) {
    processResult.addEventListener("click", calculatePace, false);
  }

  // The function that calculates pace
  function calculatePace(){
    var paceOutput = 0; // The variable that holds the pace output

    var hoursInSecs = Number(hours.value * 3600); // Takes the value of the hours input, multiplies it by 3600 to hours in seconds, changes the string to a number.

    var minsInSecs = Number(minutes.value * 60); // Takes the minutes input and converts it to a number.

    var secsInSecs = Number(seconds.value); // Takes the seconds input, changes the string to a number.
    var finalDistance = Number(distance.value); // Holds the distance input



    paceOutput = (hoursInSecs + minsInSecs + secsInSecs) / finalDistance; // Calculation for pace and update the paceOutput variable with that value.

    // The function that takes the output of the pace and turns it into a time format for display.
    function getPace(){
      var paceHours = paceOutput / 3600;

      var paceMins = paceOutput / 60; // Separate the total minutes from the total seconds.

      var paceSecs = (paceMins % 1); // Get the remainder of the pace value and multiply it by 60 to convert to seconds

      if(isNaN(paceHours) || isNaN(paceMins) || isNaN(paceSecs)) {
        pace.textContent = "Please enter a number 0-99";
      } else {
        var finalHours = Math.floor(paceHours);
        var finalMins = Math.floor(paceMins);
        var finalSecs = (paceSecs.toFixed(2) * 100);

        if(finalHours > 0) {
        pace.textContent = String('00'+finalHours).slice(-2) + ":" + String('00'+finalMins).slice(-2) + ":" + String('00'+finalSecs).slice(-2); // Update the pace output placeholder with the minutes and the seconds, only show the value to the closest second.
        } else {
          pace.textContent = String('00'+finalMins).slice(-2) + ":" + String('00'+finalSecs).slice(-2);
        }

        changeClass();
      }
    }

    function changeClass(){
      pace.classList.remove('output__pace--no-value');
    }
    getPace();
  }
});
</code>
</pre>
