$(document).ready(function() {
    $("[id = rectfirst]").hover(function(event) {
      let index = $(event.currentTarget).index() + 1;
      $("[id = visflabel]")
        .removeClass("visfirst05");
      console.log(index);
      // change this part tot find the text related to the rectbox
      $("#visflabel")
        .children(":nth-child(" + index + ")").addClass("visfirst05");
      // console.log(  $("#visflabel")
      // .children(":nth-child(" + index + ")")
      // .find("text"))
    });
});
