import $ from "jquery";

$(document).ready(function() {
  $("div.itemTag").mouseover(function() {
    console.log("test", $(this.children));
    $(this)
      .children("div.hover_bg")
      .css("visibility", "visible");
    $(this)
      .children("div.itemTitle")
      .css("visibility", "visible");
    $(this)
      .children("img")
      .css("transform", "scale(1.2)")
      .css("transition", "all 0.5s ease 0s")
      .css("border-radius", "5px");
  });

  $("div.itemTag").mouseleave(function() {
    console.log("test", $(this.children));
    $(this)
      .children("div.hover_bg")
      .css("visibility", "hidden");
    $(this)
      .children("div.itemTitle")
      .css("visibility", "hidden");
    $(this)
      .children("img")
      .css("transform", "scale(1)")
      .css("transition", "all 0.5s ease 0s")
      .css("border-radius", "0px");
    // $("div.hover_bg")
    //   .children("div.hover_bg")
    //   .css("visibility", "visible");
  });
});
