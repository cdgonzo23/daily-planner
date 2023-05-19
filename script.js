$(function () {
  var currHour = dayjs().hour()-8;
  $('.time-block').each(function() {
    var id = $(this).attr('id').split('-')[1];
    var rowHour = parseInt(id);
    if (currHour < rowHour) {
      $(this).addClass('future');
    } else if (currHour > rowHour) {
      $(this).addClass('past');
    } else {
      $(this).addClass('present');
    };
  });


  $(document).on('click', '.saveBtn', function() {
    var userProj = {
      time: $(this).closest('.time-block').attr('id'),
      description: $(this).prev().val()
    };
    if (userProj.description !== "") {
      console.log(userProj);
      localStorage.setItem(userProj.time, userProj.description)
    };
  });

  $('.time-block').each(function() {
    var id = $(this).attr('id');
    var textarea = $(this).find('.description');
    var description = localStorage.getItem(id);
    textarea.val(description);
  });


  var now = dayjs();
  $('#currentDay').text(now);
});
