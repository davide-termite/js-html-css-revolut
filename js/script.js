$(document).ready(
  function () {

    var navRightItem = $('li.section');
    var navRightTitle = $('li.section .text');

    $(navRightItem).mouseenter(
      function () {
        $(this).children('.dropdown').addClass('active');
        $(this).children('.text').addClass('li-active');
      }
    )

    $(navRightItem).mouseleave(
      function () {
        $(this).children('.dropdown').removeClass('active');
        $(this).children('.text').removeClass('li-active');
      }
    )
    
  }
)
