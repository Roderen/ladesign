$(window).scroll(function (){
        var posY=window.scrollY; //переменная сколько уже прокрутили

        if (posY > 1){
            	$('.header').addClass('header_fixed');			
        } else{
           $('.header').removeClass('header_fixed');				
        }
   });


function burger() {
	document.getElementById('dev').classList.toggle('burger_rot');
}

function more() {
	document.querySelector(".more").classList.add("more").classList.remove("more");
}

