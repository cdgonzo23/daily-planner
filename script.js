// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
var hoursArr = [09, 10, 11, 12, 13, 14, 15, 16, 17]
// console.log(hoursArr);
var newDiv1 = $( "<div class='time-block'></div>" )
var hoursDiv = document.getElementsByClassName('time-block');

$(function () {
  var currHour = dayjs().hour();
  // console.log(currHour)
  $('.time-block').each(function() {
    for (var i = 0; i < hoursArr.length; i++) {
      $('#hour-').attr('id', hoursArr[i]);
      console.log(hoursArr[i]);
      $('#cal-display').append(newDiv1);
      
    };
    // $('#cal-dislay').append($("<p>Test</p>"));

    var id = $(this).attr('id');
    var rowHour = parseInt(id);
    // console.log(rowHour);
    $('#time').text(rowHour + ":00");

    if (currHour < rowHour) {
      $(this).addClass('future');
    } else if (currHour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    };
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
var saveBtn = $('.saveBtn');
  saveBtn.on('click', function() {
    var savedProj = JSON.parse(localStorage.getItem("savedProj")) || [];
    var userProj = {
      time: $('#time').text(),
      description: $('.description').text(),
    };
    if (userProj.description !== "") {
      savedProj.push(userProj);
      localStorage.setItem('savedProj', JSON.stringify(savedProj))
    };

  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //
  // TODO: Add code to display the current date in the header of the page.
  var now = dayjs();
  $('#currentDay').text(now);
});
});
