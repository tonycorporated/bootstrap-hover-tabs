(function ($) {
  $(function () {
    $(document).on('mouseenter', '[data-hover="tab"]', function () {
      $(this).tab('show');
    });
  });
})(jQuery);
