$(function () {
  const navButton = $('#js-menuButton');
  const nav = $('#js-menu');
  navButton.on('click', function () {
    if ($(this).hasClass('el-menu--close')) {
      $(nav).animate({ 'right': '-100%' }, 200, 'linear');
      $(this).removeClass('el-menu--close').css({
        'position': 'static'
      }).html('メニュー');
    } else {
      nav.animate({ 'right': '0' }, 300, 'linear');
      $(this).css({
        'position': 'fixed',
        'top': '20px',
        'right': '20px',
        'z-index': '3'
      }).html('閉じる').addClass('el-menu--close');
    }
    
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest(nav).length && !$(e.target).closest(navButton).length) {
      $(nav).animate({ 'right': '-100%' }, 200, 'linear');
      $(navButton).css({
        'position': 'static'
      }).html('メニュー').removeClass('el-menu--close');
    }
  });

});
