/*global chrome*/

window.addEventListener("load", function() {

           $.ajax({
                            method: 'POST',
                            dataType: 'json',
                            url:  chrome.extension.getURL('config.json'),
                            cache: false,
                            success: function(data){
                                console.log('success');
                                console.log(data);
                            },
                            fail: function (jqXHR, textStatus) {
                                console.log(textStatus);
                            }
                        });



$.getJSON( chrome.extension.getURL('../config.json'), function( data ) {
    console.log('1')
    var items = [];
    $.each( data, function( key, val ) {
          console.log(data);
          console.log(key);
    });
 
});









var url = location.href;

// showButton();
function showButton(argument) {
            $('body').append(   '<div class="floatingContainer">' +
                '<div class="subActionButton"> '+
                    '<p class="floatingText"><span class="floatingTextBG">Add Contact</span></p> '+
                  '</div> '+
                  '<div class="subActionButton"> '+
                    '<p class="floatingText"><span class="floatingTextBG">Add Address</span></p> '+
                  '</div>' +
                  '<div id="note" class="subActionButton"> '+
                    '<p class="floatingText"><span class="floatingTextBG">Add Note</span></p> '+
                  '</div> '+
                 '<div class="actionButton" style=><p class="floatingText"><span class="floatingTextBG">Add Customer</span></p></div> '+
                '</div>');

            // $('.floatingContainer').attr('background-image', chrome.extension.getURL("mc.png"));

            
            var serverUrl = 'https://www.ex.ua/ru';

            $('.actionButton').on('click', function () {
                        var user_url = (location.href);
                        console.log(user_url);
                        $.ajax({
                            method: "GET",
                            type: 'text',
                            url: serverUrl,
                            data: user_url,
                            cache: false,
                            success: function(data){
                                console.log(success);
                                console.log(data);
                            },
                            fail: function (jqXHR, textStatus) {
                                console.log(textStatus);
                            }
                        });
            })

            $('.floatingContainer').hover(function(){
              //$('.subActionButton').addClass('display');
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
    // var button =  $('.note');
     
    // button.click(onClick);
    // button.hover(onHover);
    //     function onClick (e){
    //         $(button).find('.item_style').toggleClass('item_style_hover');
    //     };
    //     function onHover (e){
    //         $(button).find('.item_style').toggleClass('item_style_hover');
    //     };



    // var url = document.getElementById('note');
    //     url.addEventListener("click", getUrl);
    //     function getEmail() {
            
    //     }
    //     function getUrl () {
    //    
    //     var url = ''
    //     var jqxhr = $.post(url, user_url)
    //                 .success(function(data) { console.log("success"); })
    //                 .error(function(error) { console.log("error"); })
    //                 .complete(function(data) { console.log("complete"); });
            
    //    }


    // var btn = document.getElementById('changeColor');
    //     // btn.addEventListener("click", backGround);
    //     // btn.addEventListener("click", textColor);

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
    



// var btnEl = null;
// function showEditButton(el) {
//     if (btnEl) {
//         document.body.removeChild(btnEl);
//     }
//     var rect = el.getBoundingClientRect();

//     if (rect.left === 0 && rect.top === 0) {
//         return;
//     }
//     var button = document.createElement("img");
//     button.setAttribute("src", imgSrc);
//     button.setAttribute("title", "Edit in Zed");
//     button.setAttribute("style", "position: absolute; left: " + Math.round(rect.right - 40) + "px; top: " + (rect.top + window.scrollY + 5) + "px; cursor: pointer; opacity: 0.8;");
    

//     button.onclick = function() {
//         console.log("Contacting Chrome app to edit", el.value || el.innerText);
//         var setValue = el.value !== undefined;

//         var port = chrome.runtime.connect({
//             name: "edit-textarea"
//         });
//         port.postMessage({
//             text: setValue ? el.value : el.innerText
//         });
//         port.onMessage.addListener(function(msg) {
//             if (setValue) {
//                 el.value = msg.text;
//             } else {
//                 el.innerText = msg.text;
//             }
//         });
//         port.onDisconnect.addListener(function() {
//             // console.log("Done editing");
//         });
//     };
//     document.body.appendChild(button);
//     btnEl = button;
// }

// //addButtons();


// // $('#button').click()


// window.addEventListener("mouseover", function(e) {
//     if (e.toElement.tagName === "TEXTAREA") {
//         showEditButton(e.toElement);
//     } else if (e.toElement.getAttribute("contenteditable")) {
//         showEditButton(e.toElement);
//     } else if (e.toElement !== btnEl) {
//         if (btnEl) {
//             document.body.removeChild(btnEl);
//             btnEl = null;
//         }
//     }
// });

// window.addEventListener("load", function() {
//     if (location.href.indexOf("https://github.com/") === 0) {
//         var attachEl = document.querySelector("span[aria-label='Create a new file here']");
//         if (attachEl) {
//             var button = document.createElement("img");
           
//             button.setAttribute("src", imgSrc);
           
//             button.setAttribute("title", "Edit in Zed");
            
//             button.setAttribute("style", "position: relative; top: 5px; left: 5px;");
           
//             button.addEventListener("click", function() {
//                 console.log("And now we'll open Zed for", location.href);
//                 var port = chrome.runtime.connect({
//                     name: "edit-textarea"
//                 });
//                 port.postMessage({
//                     url: location.href
//                 });
//                 // port.disconnect();
//             });
//             attachEl.parentElement.parentElement.appendChild(button);
//         }

//     }
// });
})