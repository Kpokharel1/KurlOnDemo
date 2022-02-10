// creating navbar fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 80) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 
// Increament and Decrement Button
$(document).ready(function(){

  var quantitiy=0;
     $('.quantity-right-plus').click(function(e){
          
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity').val());
          
          // If is not undefined
              
              $('#quantity').val(quantity + 1);
  
            
              // Increment
          
      });
  
       $('.quantity-left-minus').click(function(e){
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity').val());
          
          // If is not undefined
        
              // Increment
              if(quantity>0){
              $('#quantity').val(quantity - 1);
              }
      });
      
  });



// displayimg sun image in main image
const box = document.querySelectorAll(".box");
function changeImage(event){
  document.querySelector(".pro-img").src= event.children[0].src

  
}

// making dropdown upon hover
$(document).ready(function(){
  document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
      document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
        everyitem.addEventListener('mouseover', function(e){
    
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
          }
    
        });
        everyitem.addEventListener('mouseleave', function(e){
          let el_link = this.querySelector('a[data-bs-toggle]');
    
          if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
          }
    
    
        })
      });
    
    }
    
    }); 
  
  });
  // Pagination in product section
  var nombrePage = $(".content").length;

  showPage = function(pagination) {
    if (pagination < 0 || pagination >= nombrePage) return;
  
    $(".content").hide().eq(pagination).show();
    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
  }
  
  // Go to Left
  $(".prev").click(function() {
    showPage($("#pagin ul .active").index() + 1);
  });
  
  // Go to Right
  $(".next").click(function() {
    showPage($("#pagin ul .active").index() - 1);
  });
  
  $("#pagin ul a").click(function(e) {
    e.preventDefault();
    showPage($(this).parent().index());
  });
  
  showPage(0)