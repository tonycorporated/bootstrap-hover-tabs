(function ($) {
  $(function () {
    $(document).on('mouseenter', '[data-toggle="tab"]', function () {
      $(this).tab('show');
    });
  });
})(jQuery);
