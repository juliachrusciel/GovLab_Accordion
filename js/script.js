function() {

  var allPanels = $('.b-accordion-section > dd').hide();

  $('.b-accordion-section > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

}(jQuery);
