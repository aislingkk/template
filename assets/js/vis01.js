$(document).ready(function() {
    $("rectfirst").hover(function(event) {
      let index = $(event.currentTarget).index() + 1;
      $("#visflabel g")
        .find("text")
        .removeClass("visfirst5");
  
      // change this part tot find the text related to the rectbox
      $("#visflabel")
        .children(":nth-child(" + index + ")")
        .find("text")
        .addClass("visfirst05");
    });
});
