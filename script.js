$(document).ready(function(){
  $(".li").css("opacity", 0.8);
  $(".li").hover(function(){
    $(this).css("opacity",1);
  }, function(){
    $(this).css("opacity",0.8);
  });

  $(".button").hover(function(){
    $(this).css({"color":"#563D7C","background-color":"#FFE484","opacity":1})
  },function () {
    $(this).css({"color":"#FFE484","background-color":"#563D7C","opacity":0.9})
  })

  $(".btn-2").click(function(){
    $(".hide").fadeIn();
  })

  $(".btn-4").click(function(){
    $(".hide2").fadeIn();
  })

  $(".modal,.btn-close,.cross").click(function(){
    $(".hide,.hide2").fadeOut();
  })


  $(".bars-new").click(function(){
    if ($(".nav-down").is(":hidden")) {
      $(".nav-down").slideDown(300);
    } else {
      $(".nav-down").slideUp(300);
    }
  })

  $(".link div").hover(function(){
    $(this).css("color","#007BFF");
  }, function(){
    $(this).css("color","#99979C");
  });

  $(".link div").hover(function(){
    $(this).css("color","#007BFF");
  }, function(){
    $(this).css("color","#99979C");
  });

  $("a").hover(function(){
    $(this).css("color","#007BFF");
  }, function(){
    $(this).css("color","#99979C");
  });


  $(".bars").click(function(){
    if ($(".items").is(":hidden")) {
      $(".items").slideDown(300);
    } else {
      $(".items").slideUp(300);
    }
  });
});
