var _s = document.createElement('script');
_s.setAttribute(
  'src',
  'https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js'
);
_s.onload = function() {
  setInterval(function() {
    if (!$('a[action-type="feed_list_delete"]')) {
      $('a.next').click();
    } else {
      $('a[action-type="feed_list_delete"]')[0].click();
      $('a[action-type="ok"]')[0].click();
    }

    // scroll bottom let auto load
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  }, 800);
};
document.head.appendChild(_s);
