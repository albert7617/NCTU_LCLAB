$(document).ready(function () {

  $('#intro').on('click', '#toggler', function (event) {
    $('#nav-mobile').show('fast', function () {

    });
  });

  $('#nav-mobile').on('click', '#closenav', function (event) {
    $('#nav-mobile').hide('fast', function () {

    });
  });
});