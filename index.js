$('.ads-main span.next').click(function() {
    $current = $(this).siblings('img.active');
    $next = $current.next('img');
    if ($next.length != 0) {
      $current.removeClass('active');
      $next.addClass('active');
    }
  })
  $('.ads-main span.prev').click(function() {
    $current = $(this).siblings('img.active');
    $prev = $current.prev('img');
    if ($prev.length != 0) {
      $current.removeClass('active');
      $prev.addClass('active');
    }
  })