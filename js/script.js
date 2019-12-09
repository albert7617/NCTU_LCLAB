$(document).ready(function () {
  $('#toggler').on('click', function (event) {
    $('#nav-mobile').show('fast', function () {

    });
  });

  $('#closenav').on('click', function (event) {
    $('#nav-mobile').hide('fast', function () {

    });
  });
});