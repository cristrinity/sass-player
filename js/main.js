$("li.main-list__group").mouseover(function(){
    $(this).children(".blur").addClass("show");
    $(this).children(".blur").removeClass("hide");
  });
  $("li.main-list__group").mouseout(function(){
    $(this).children(".blur").addClass("hide");
    $(this).children(".blur").removeClass("show");
  });
