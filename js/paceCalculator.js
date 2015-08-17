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
