$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});


// $(document).ready(function() {
//   $(".clickable-show").click(function() {
//     $("#walrus").fadeIn();
//     });
//   $(".clickable-hide").click(function() {
//     $("#walrus").fadeOut();
//   });
// });

  // jQuery("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // jQuery("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // jQuery("img").click(function() {
  //   alert("This is an image.");
  // });
