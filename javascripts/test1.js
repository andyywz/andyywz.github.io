$(function() {
  $('.board', '.mood-board').on('mouseenter', function() {
    $(this).find('.info').fadeIn(250);
  }).on('mouseleave', function() {
    $(this).find('.info').fadeOut(250);
  });
});
