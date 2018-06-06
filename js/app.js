$(document).ready(function() {

  // add event listener on left button
  $(".controls--left").on("click", () => {

    // get the width of first image in a row
    let topFirstImg = $(".slider--top__container img:first").width();
    let bottomFirstImg = $(".slider--bottom__container img:first").width();

    // prevent clicks during animation time
    if ($(":animated").length) {
      return false;
    }

    // animate top row by moving it by the first img width
    // and place first img after the last
    $(".slider--top__container").css("left", topFirstImg);
    $(".slider--top__container img:last").after($(".slider--top__container img:first"));
    $(".slider--top__container").animate({ left: 0 }, 700);

    // same for bottom row
    $(".slider--bottom__container").css("left", bottomFirstImg);
    $(".slider--bottom__container img:last").after($(".slider--bottom__container img:first"));
    $(".slider--bottom__container").animate({ left: 0 }, 700); 
  
  });

  // add event listener on right buttom
  $(".controls--right").on("click", function() {

    // get the width of first image in a row + margin
    let topFirstImg = $(".slider--top__container img:last").width() + 10;
    let bottomFirstImg = $(".slider--bottom__container img:last").width() + 10;

    // prevent clicks during animation time
    if ($(":animated").length) {
      return false;
    }
 
    // animate top row by moving the container by the first image width
    // and place last img before the first
    $(".slider--top__container").animate({ left: topFirstImg }, 700, function() {
        $(".slider--top__container img:first").before($(".slider--top__container img:last"));
        $(this).css("left", "0px");
      });

    // same for bottom row
    $(".slider--bottom__container").animate({ left: bottomFirstImg }, 700, function() {
        $(".slider--bottom__container img:first").before($(".slider--bottom__container img:last"));
        $(this).css("left", "0px");
      });
  });
});
