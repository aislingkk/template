$(document).ready(function () {
  $("[id = redcircle]").hover(function(event) {
    let index = $(event.currentTarget).index() + 1;
    $(".event-show").removeClass("event-show");

    // change this part tot find the text related to the rectbox
    $("#eventtext")
      .children(":nth-child(" + index + ")")
      .addClass("event-show");
  });
});