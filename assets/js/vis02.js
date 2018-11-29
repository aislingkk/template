$(document).ready(function () {
  $("[id = rectsecond]").hover(function(event) {
    console.log(1);
    let index = $(event.currentTarget).index() + 1;
    $(".textBold").removeClass("textBold");

    // change this part tot find the text related to the rectbox
    console.log(index);
    $("#labelsecond")
      .find('text')
      .addClass("textBold");
  });
});