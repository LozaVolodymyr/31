var express = require('express'),
    app = express();
var bodyParser = require('body-parser');
var request = require('request');
var FB = require('fb');

app.use(bodyParser.urlencoded({ extended: false }));

// Facebook User and Group config
var user_id = '499320920251575';
var group_id = '225860594468080';

// Facebook App config		
var client_id = '831794450259457';
var client_secret = '007a98d6593bda1e4fefc8bb7ad1c9ca';

// 4.12.2016 userAccessToken for 60-days;
var userAccessToken = 'CAAL0gzy73gEBABJj8YWCJYeAi4w4PhDZChzvSZBciFAVRT5DXGEdc0nPzfZCjV4ZBhNPhvRmsooMHInI8jqH1OOllrxIt1XdZBJwLYd7oCC0tYA5ZBhKD0rz4XjZAMrDVFyMtFSev6wF8T3UXBA64Uaj5rVc9L9VbWDruSawoFW2AylwixTuyftArW25ptiQYaqAvBl4Ext8QZDZD';

// method to extend userAccessToken
var reqAccessToken = 'https://graph.facebook.com/oauth/access_token?client_id='+ client_id  +'&client_secret='+ client_secret +'&grant_type=fb_exchange_token&fb_exchange_token=' + userAccessToken;

request(reqAccessToken, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var access_token = body.replace('access_token=', '').replace(/&expires=[\d]+/, ''); // Show the HTML for the Google homepage.
    console.log(access_token);
	FB.setAccessToken(access_token);
  }
})

// method to get appAccessToken
FB.api('oauth/access_token', {
    client_id: '831794450259457',
    client_secret: '007a98d6593bda1e4fefc8bb7ad1c9ca',
    grant_type: 'client_credentials'
}, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }
 
    var apiAccessToken = res.access_token;
   
});
   
// method to post in group
app.post('/', function (req, res) {
 		for(var p in req.body){ var url = p; }
  	FB.api( group_id +'/feed', 'post', { link: url } , function (res) {
  		if(!res || res.error) {
    		console.log(!res ? 'error occurred' : res.error);
    		return;
  		}
  			console.log('Post Id: ' + res.id);
	});
  			res.end();
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


