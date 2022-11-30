let swiper = new Swiper(".mySwiper",{
    loop:true,
    autoplay:{
        delay:3000
    }
})



$('.buy').click(function(){
    $('.bottom').addClass("clicked");
  });
  
  $('.remove').click(function(){
    $('.bottom').removeClass("clicked");
  });