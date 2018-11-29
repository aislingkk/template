$(document).ready(function () {
  $("[id = rectfirst]").hover(function (event) {
    let index = $(event.currentTarget).index() + 1;
    $(".visfirst05").removeClass("visfirst05");

    // change this part tot find the text related to the rectbox
    console.log(index);
    $("#visflabel")
      .children(":nth-child(" + index + ")")
      .addClass("visfirst05");
  });
});


// $(document).ready(function () {
//   $("[id = textscale]").click(function (event) {
//     console.log(1);
//     let index = $(event.currentTarget).index() + 1;
//     $("textscale").addClass("blue");
//     $("div").addClass("important");
//   });
});
