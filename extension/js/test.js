$(document).ready(function () {
 showButton();
  // Config

  var config = {
			image: 'img/hand.svg',
			subimage: ['img/social.svg', 'img/location.svg', 'img/video.svg', 'img/internet.svg' ],
      item: "<div class='subActionButton'><p class='floatingText'><span class='floatingTextBG'>Add Contact</span></p>",

			
			menuBackground: function() {
				 // console.log(this.subimage);
         $('.actionButton').css({
				 	'background' : 'url(' + chrome.extension.getURL(this.image) +')',
				 	'background-size' :  'cover'
				 });
			},
			submenuBackground: function(element, index) {
				 $('.floatingContainer').prepend('<div id="icon-' + index +'" class="subActionButton"></div>');
         $('#icon-' + index).css({
				 	'background' : 'url(' + chrome.extension.getURL(element) +')',
				 	'background-size' :  'cover'
				 });
			},
	}


  config.subimage.forEach(function (element, index) {
	     config.submenuBackground(element, index);
  })

  config.menuBackground();

	function showButton(argument) {
            $('body').append('<div class="floatingContainer">' +
                                '<div class="actionButton"></div> '+
                             '</div>');
            $('.floatingContainer').hover(function(){
            }, function(){
              $('.subActionButton').removeClass('display');
              $('.actionButton').removeClass('open');
            });
            $('.subActionButton').hover(function(){
              $(this).find('.floatingText').addClass('show');
            }, function(){
              $(this).find('.floatingText').removeClass('show');
            });

            $('.actionButton').hover(function(){
              $(this).addClass('open');
              $(this).find('.floatingText').addClass('show');
              $('.subActionButton').addClass('display');
            }, function(){
              $(this).find('.floatingText').removeClass('show');
            });
}

$('#icon-0').on('click', urlGet);
$('#icon-1').on('click', backGround);
$('#icon-2').on('click', textColor);

function urlGet() {
           var user_url = location.href;
            // console.log(user_url);


            $.ajax({
              type: "POST",
              url: "http://localhost:3000/",
              data: user_url,
              success: function () {
                console.log('done');
              },
              dataType: 'text'
            });
            // $.post( "localhost:3000", location.href);
            // var body = 'name=' + '1' +
            //           '&surname=' + encodeURIComponent(user_url);
            // var xhr = new XMLHttpRequest();

            // xhr.open("POST", 'http://localhost:3000/', true);
            // xhr.send(user_url);
        



           // var conn = new WebSocket('ws://176.37.219.61:5005');
           //            // conn.onmessage = function(e) {

           //            //   console.log(typeof e.data)
           //            //   console.log(e.data); 
           //            // };
           //            conn.onopen = function(e) {
           //                console.log("Connection established!");
           //                conn.send(location.href);
                      // };
      }   


function backGround () {
    var attributes = 
        [].forEach.call(document.body.getElementsByTagName('*'), function (element, index, array) {
            var color = window.getComputedStyle(element).backgroundColor;
            console.log(color);
                
                if (color != 'transparent' && color != 'rgba(0, 0, 0, 0)' && color != 'rgb(255, 255, 255)') {
                    element.setAttribute("style", "background-color: #009688;");

                }
                if (color == 'rgb(255, 255, 255)') {
                   element.setAttribute("style", "background-color: #B0BEC5;");
                }
        })        
    }
function textColor() {
         [].forEach.call(attributes, function (element, index, array) {
            var text = window.getComputedStyle(element).color;
               if (text == 'rgb(0, 0, 0)') {
                   element.setAttribute("style", "color: rgb(255, 255, 255)");
                }
        })       
    }
    



})

