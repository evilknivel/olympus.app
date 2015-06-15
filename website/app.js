//THIS CODE SHOULD BE PART OF A FILE WHICH IS LOADED BEFORE jQueryMobile

/**
* Create couple of jQuery Deferred Objects to catch the 
* firing of the two events associated with the loading of
* the two frameworks.
*/
var gapReady = $.Deferred();
var jqmReady = $.Deferred();

//Catch "deviceready" event which is fired when PhoneGap is ready
document.addEventListener("deviceReady", deviceReady, false);

//Resolve gapReady in reponse to deviceReady event
function deviceReady()
{
	gapReady.resolve();
}

/**
* Catch "mobileinit" event which is fired when a jQueryMobile is loaded.
* Ensure that we respond to this event only once.
*/
$(document).on("mobileinit", function(){
	jqmReady.resolve();
});

/**
* Run your App Logic only when both frameworks have loaded
*/
$.when(gapReady, jqmReady).then(myAppLogic);

// App Logic
function myAppLogic()
{
 alert("lauft");
}


$('form').submit(function(){
var landmarkID = $(this).parent().attr('data-landmark-id');
var postData = $(this).serialize();

$.ajax({
type: 'POST',
data: postData+'&amp;lid='+landmarkID,
url: 'http://tsvheist.elnath.uberspace.de/mail.php',
success: function(data){
console.log(data);
alert('Your comment was successfully added');
},
error: function(){
console.log(data);
alert('There was an error adding your comment');
}
});

return false;
});



