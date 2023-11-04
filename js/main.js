
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

  //------- Active Nice Select --------//

    $('select').niceSelect();


    $('.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search").on("click", function () {
        $("#search_input_box").slideToggle();
        $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
        $('#search_input_box').slideUp(500);
    });

    /*==========================
		javaScript for sticky header
		============================*/
			$(".sticky-header").sticky();

    /*=================================
    Javascript for banner area carousel
    ==================================*/
    $(".active-banner-slider").owlCarousel({
        items:1,
        autoplay:true,
        autoplayTimeout: 2000,
        loop:true,
        nav:true,
        navText:["<img src='img/banner/prev.png'>","<img src='img/banner/next.png'>"],
        dots:false
    });

    /*=================================
    Javascript for product area carousel
    ==================================*/
    $(".active-product-area").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/product/prev.png'>","<img src='img/product/next.png'>"],
        dots:false
    });

    /*=================================
    Javascript for single product area carousel
    ==================================*/
    $(".s_Product_carousel").owlCarousel({
      items:1,
      autoplay:false,
      autoplayTimeout: 5000,
      loop:true,
      nav:false,
      dots:true
    });
    
    /*=================================
    Javascript for exclusive area carousel
    ==================================*/
    $(".active-exclusive-product-slider").owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout: 5000,
        loop:true,
        nav:true,
        navText:["<img src='img/product/prev.png'>","<img src='img/product/next.png'>"],
        dots:false
    });

    //--------- Accordion Icon Change ---------//

    $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".lnr-arrow-right").removeClass("lnr-arrow-right").addClass("lnr-arrow-left");
    }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".lnr-arrow-left").removeClass("lnr-arrow-left").addClass("lnr-arrow-right");
    });

  // Select all links with hashes
  $('.main-menubar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top-70
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });



      // -------   Mail Send ajax

         $(document).ready(function() {
            var form = $('#booking'); // contact form
            var submit = $('.submit-btn'); // submit button
            var alert = $('.alert-msg'); // alert div for show alert message

            // form submit event
            form.on('submit', function(e) {
                e.preventDefault(); // prevent default form submit

                $.ajax({
                    url: 'booking.php', // form action url
                    type: 'POST', // form submit method get/post
                    dataType: 'html', // request type html/json/xml
                    data: form.serialize(), // serialize form data
                    beforeSend: function() {
                        alert.fadeOut();
                        submit.html('Sending....'); // change submit button text
                    },
                    success: function(data) {
                        alert.html(data).fadeIn(); // fade in response data
                        form.trigger('reset'); // reset form
                        submit.attr("style", "display: none !important");; // reset submit button text
                    },
                    error: function(e) {
                        console.log(e)
                    }
                });
            });
        });




    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });   



     if(document.getElementById("js-countdown")){

        var countdown = new Date("October 17, 2018");

        function getRemainingTime(endtime) {
            var milliseconds = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor(milliseconds / 1000 % 60);
            var minutes = Math.floor(milliseconds / 1000 / 60 % 60);
            var hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
            var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return {
            'total': milliseconds,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
            };
        }

        function initClock(id, endtime) {
            var counter = document.getElementById(id);
            var daysItem = counter.querySelector('.js-countdown-days');
            var hoursItem = counter.querySelector('.js-countdown-hours');
            var minutesItem = counter.querySelector('.js-countdown-minutes');
            var secondsItem = counter.querySelector('.js-countdown-seconds');

        function updateClock() {
            var time = getRemainingTime(endtime);

            daysItem.innerHTML = time.days;
            hoursItem.innerHTML = ('0' + time.hours).slice(-2);
            minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
            secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

            if (time.total <= 0) {
              clearInterval(timeinterval);
            }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        initClock('js-countdown', countdown);

  };



      $('.quick-view-carousel-details').owlCarousel({
          loop: true,
          dots: true,
          items: 1,
      })



    //----- Active No ui slider --------//



    $(function(){

        if(document.getElementById("price-range")){
        
        var nonLinearSlider = document.getElementById('price-range');
        
        noUiSlider.create(nonLinearSlider, {
            connect: true,
            behaviour: 'tap',
            start: [ 500, 4000 ],
            range: {
                // Starting at 500, step the value by 500,
                // until 4000 is reached. From there, step by 1000.
                'min': [ 0 ],
                '10%': [ 500, 500 ],
                '50%': [ 4000, 1000 ],
                'max': [ 10000 ]
            }
        });


        var nodes = [
            document.getElementById('lower-value'), // 0
            document.getElementById('upper-value')  // 1
        ];

        // Display the slider value and how far the handle moved
        // from the left edge of the slider.
        nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
            nodes[handle].innerHTML = values[handle];
        });

        }

    });

    
    //-------- Have Cupon Button Text Toggle Change -------//

    $('.have-btn').on('click', function(e){
        e.preventDefault();
        $('.have-btn span').text(function(i, text){
          return text === "Have a Coupon?" ? "Close Coupon" : "Have a Coupon?";
        })
        $('.cupon-code').fadeToggle("slow");
    });

    $('.load-more-btn').on('click', function(e){
        e.preventDefault();
        $('.load-product').fadeIn('slow');
        $(this).fadeOut();
    });
    




  //------- Start Quantity Increase & Decrease Value --------//




    var value,
        quantity = document.getElementsByClassName('quantity-container');

    function createBindings(quantityContainer) {
        var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
        var increase = quantityContainer.getElementsByClassName('increase')[0];
        var decrease = quantityContainer.getElementsByClassName('decrease')[0];
        increase.addEventListener('click', function () { increaseValue(quantityAmount); });
        decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
    }

    function init() {
        for (var i = 0; i < quantity.length; i++ ) {
            createBindings(quantity[i]);
        }
    };

    function increaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

  init();

//------- End Quantity Increase & Decrease Value --------//

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

    if ($("#mapBox").length) {
        var $lat = $("#mapBox").data("lat");
        var $lon = $("#mapBox").data("lon");
        var $zoom = $("#mapBox").data("zoom");
        var $marker = $("#mapBox").data("marker");
        var $info = $("#mapBox").data("info");
        var $markerLat = $("#mapBox").data("mlat");
        var $markerLon = $("#mapBox").data("mlon");
        var map = new GMaps({
          el: "#mapBox",
          lat: $lat,
          lng: $lon,
          scrollwheel: false,
          scaleControl: true,
          streetViewControl: false,
          panControl: true,
          disableDoubleClickZoom: true,
          mapTypeControl: false,
          zoom: $zoom,
          styles: [
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#dcdfe6"
                }
              ]
            },
            {
              featureType: "transit",
              stylers: [
                {
                  color: "#808080"
                },
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#dcdfe6"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#ffffff"
                },
                {
                  weight: 1.8
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d7d7d7"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#ebebeb"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  color: "#a7a7a7"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "landscape",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#efefef"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#696969"
                }
              ]
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  color: "#737373"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#d6d6d6"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {},
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#dadada"
                }
              ]
            }
          ]
        });
      }


  

 });



 //------- Additional JS Changes --------//
 // Display only necessary shoes
 
 // For category.html
//For Filtering of by brand





















 //For the single product.html

 const products = [
  {
    id:1,
    name: "Nike Air Force 1",
    image: ["img/Products-Category/Product-Shoes-1.png","img/Products-Category/Product-Shoes-1.png","img/Products-Category/Product-Shoes-1.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "999.00",
    availability: "In-Stock",
    category: "Men (Casual)"

  },

  {
    id:2,
    name: "Nike Mamba Fury",
    image: ["img/Products-Category/Product-Shoes-2.png","img/Products-Category/Product-Shoes-2.png","img/Products-Category/Product-Shoes-2.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,700.00",
    availability: "In-Stock",
    category: "Men (Basketball)"
  },

{
    id:3,
    name: "Nike Air Zoom Pegasus ",
    image: ["img/Products-Category/Product-Shoes-3.png","img/Products-Category/Product-Shoes-3.png","img/Products-Category/Product-Shoes-3.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,883.00",
    availability: "In-Stock",
    category: "Women (Running)"
  },

  {
    id:4,
    name: "Kobe 6 Protro",
    image: ["img/Products-Category/Product-Shoes-4.png","img/Products-Category/Product-Shoes-4.png","img/Products-Category/Product-Shoes-4.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "599.00",
    availability: "In-Stock",
    category: "Men (Basketball)"
  },

  {
    id:5,
    name: "Adidas Superstar",
    image: ["img/Products-Category/Product-Shoes-5.png","img/Products-Category/Product-Shoes-5.png","img/Products-Category/Product-Shoes-5.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,499.00",
    availability: "In-Stock",
    category: "Men (Casual)"
  },


  {
    id:6,
    name: "Adidas Yeezy 350 ",
    image: ["img/Products-Category/Product-Shoes-6.png","img/Products-Category/Product-Shoes-6.png","img/Products-Category/Product-Shoes-6.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,645.00",
    availability: "In-Stock",
    category: "Men (Running)"
  },


  {
    id:7,
    name: "PUMA Karmen Rebelle Trainers ",
    image: ["img/Products-Category/Product-Shoes-7.png","img/Products-Category/Product-Shoes-7.png","img/Products-Category/Product-Shoes-7.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,699.00",
    availability: "In-Stock",
    category: "Women (Casual)"
  },


  {
    id:8,
    name: "Converse Chuck Taylor All-Star",
    image: ["img/Products-Category/Product-Shoes-10.png","img/Products-Category/Product-Shoes-10.png","img/Products-Category/Product-Shoes-10.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "655.00",
    availability: "In-Stock",
    category: "Men (Casual)"
  },

  {
    id:9,
    name: "Onitsuka Tiger Mexico 66 SD for Men",
    image: ["img/Products-Category/Product-Shoes-12.png","img/Products-Category/Product-Shoes-12.png","img/Products-Category/Product-Shoes-12.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "599.00",
    availability: "In-Stock",
    category: "Men (Casual)"
  },

  {
    id:10,
    name: "Chunky Sketchers",
    image: ["img/Products-Category/Product-Shoes-8.png","img/Products-Category/Product-Shoes-8.png","img/Products-Category/Product-Shoes-8.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,596.00",
    availability: "In-Stock",
    category: "Women (Casual)"
  },

  {
    id:11,
    name: "Fila Disruptor",
    image: ["img/Products-Category/Product-Shoes-9.png","img/Products-Category/Product-Shoes-9.png","img/Products-Category/Product-Shoes-9.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,994.00",
    availability: "In-Stock",
    category: "Women (Casual)"
  },

  {
    id:12,
    name: "Vans Old Skool",
    image: ["img/Products-Category/Product-Shoes-13.png","img/Products-Category/Product-Shoes-13.png","img/Products-Category/Product-Shoes-13.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "1,650.00",
    availability: "In-Stock",
    category: "Men (Casual)"
  },

  {
    id:13,
    name: "New Balance 574",
    image: ["img/Products-Category/Product-Shoes-1.png","img/Products-Category/Product-Shoes-1.png","img/Products-Category/Product-Shoes-1.png",],
    description: "This product is an OEM an original equipment manufacturer is generally perceived as a company that produces non-aftermarket parts and equipment that may be marketed by another manufacturer.",
    price: "655.00",
    availability: "In-Stock",
    category: "Men (Casual)"
  },



 ];

// Function to get the selected product's details by its ID
function getProductById(id) {
  return products.find(product => product.id === id);
}

// Function to populate the product detail page with the selected product's details
function populateProductDetail() {
  const productDetailContainer = document.querySelector(".s_product_text");
  const productImageCarousel = document.getElementById("productImageCarousel");

  const urlParams = new URLSearchParams(window.location.search);
  const productId = Number(urlParams.get("id"));
  const selectedProduct = getProductById(productId);

  if (selectedProduct) {
      // Populate product details
      productDetailContainer.innerHTML = `
      <style>
      .nice-select
      {
        float: none!important;
        line-height: 30px;
      }
    </style
          <h3>${selectedProduct.name}</h3>
          <h2>₱${selectedProduct.price}</h2>
          <ul class="list">
              <li><a class="active" href="#"><span>Category</span>: ${selectedProduct.category}</a></li>
              <li><a class="active" href="#"><span>Availability</span>: ${selectedProduct.availability}</a></li>
              <!-- Add more product details here if needed -->
          </ul>
          <p>${selectedProduct.description}</p>
          
          <div class="product_count">
          
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" class="form-control" value="1" min="1">
         
          </div>

          <div class="product_count" style="margin-left:20px">
          <label for="size">Size:</label>

          <select name="size" id="size" class="form-control">
          <option value="1">7</option>
          <option value="2">8</option>
          <option value="3">9</option>
          <option value="4">10</option>
          <option value="5">11</option>
          <option value="6">12</option>
          </select>
        
          </div>
         
          <div class="card_area d-flex align-items-center">
              <a class="primary-btn" href="javascript:void(0);" id="addtoc" name="addtoc">Add to Cart</a>
              <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
              <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
          </div>
      `;
      
      // Populate product images
      if (selectedProduct.image.length === 1) {
          productImageCarousel.innerHTML = `
              <div class="single-prd-item">
                  <img class="img-fluid" src="${selectedProduct.image}" alt="">
              </div>
          `;
      } else {
          productImageCarousel.innerHTML = `
              <div class="single-prd-item">
                  <img class="img-fluid" src="${selectedProduct.image[0]}" alt="">
              </div>
              <div class="single-prd-item">
                  <img class="img-fluid" src="${selectedProduct.image[1]}" alt="">
              </div>
              <div class="single-prd-item">
                  <img class="img-fluid" src="${selectedProduct.image[2]}" alt="">
              </div>
          `;
      }


      //add to cart
      const addToCartButton = document.querySelector(".primary-btn");
      const quantityInput = document.getElementById("quantity");

      addToCartButton.addEventListener("click", () => {

          //display successadd div
          const successAdd = document.getElementById("successadd");
          successAdd.style.display = "block";

          //go to top with smooth scroll
          window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth"
          });
          
          let cart = localStorage.getItem("cart");
          if (cart) {
              cart = JSON.parse(cart);
              const existingCartItem = cart.find(item => item.id === selectedProduct.id);
              if (existingCartItem) {
                  existingCartItem.quantity += Number(quantityInput.value);
              } else {
                  cart.push({
                      ...selectedProduct,
                      quantity: Number(quantityInput.value)
                  });
              }
              localStorage.setItem("cart", JSON.stringify(cart));
          } else {
              localStorage.setItem("cart", JSON.stringify([{
                  ...selectedProduct,
                  quantity: Number(quantityInput.value)
              }]));
          }
      });

      //get the cart and display it to console
      const cart = localStorage.getItem("cart");
      console.log(JSON.parse(cart));


      
      
  } else {
  }
}

// Call the function to display the products
populateProductDetail();


// Function to populate the sizes

  


// Call the function to populate sizes
//populateSizes();
  



//filerting categories















//Contact.html

/*Function that add a marker in the google map found in contact.html
const lat = parseFloat(document.getElementById("mapBox").getAttribute("data-lat"));
const lon = parseFloat(document.getElementById("mapBox").getAttribute("data-lon"));

const map = L.map("mapBox").setView([lat, lon], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([lat, lon]).addTo(map);*/







