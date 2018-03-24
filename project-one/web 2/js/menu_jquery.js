$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});


// Login Form
$(function() {
    var button = $('#loginButton');
    var box = $('#loginBox');
    var form = $('#loginForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#loginButton').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
});
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/categories",
  "method": "GET",
  "headers": {
  "user-key": "688e6d4b4b94146be7cd3e7f30f6fef5",
    
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
 
 $("button").on("click", function() {
      console.log("hello");
  var pizza = $(this).attr("data-food");
 
  $("#gifs-appear-here").empty();
 
  var queryURL= "https://api.giphy.com/v1/gifs/search?q=" +
   pizza + "&api_key=dc6zaTOxFJmzC&limit=3";
 
 
  $.ajax({
    url: queryURL,
    method: "GET"
  })
 
  .then(function(response) {
    var results= response.data;
    for (var i = 0; i <results.length; i++) {
    var pizzaDiv = $("<div>");
    var pizzaImage = $("<img>");
    pizzaImage.attr("src", results[i].images.fixed_height.url);
 
  
 
    pizzaDiv.append(pizzaImage);
 
 
    $("#gifs-appear-here").prepend(pizzaDiv);
 
  }
 
  });
 
 });  
  
  
 var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://developers.zomato.com/api/v2.1/categories",
  "method": "GET",
  "headers": {
    "user-key": "688e6d4b4b94146be7cd3e7f30f6fef5",

  }
 }
 
 $.ajax(settings).done(function (response) {
  console.log(response);
 });
//  Message Input
 
//  Message Amir, Deborah Kirchenberg, Na-Nate
 
//  *bold* _italics_ ~strike~ `code` ```preformatted``` >quote
   

 // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
$(document).ready(function(){
  $("#myBtn").click(function(){
      alert("Hello World");   
  });
});

// When the user clicks on the button, open the modal 
$("#myBtn").on("click", function() {
  myModal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function() {
  myModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
$("#window").on("click", function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
});

