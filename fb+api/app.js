var express = require('express');
var bodyParser = require('body-parser');

var FB = require('fb');
FB.setAccessToken('CAAL0gzy73gEBAPZCy6JMsCssEuZBdnYE1en56IVJIgfN2IFKOGJXVJM1dZCVhjQmv5UhtsamSxHQQxbvXZC9gIWTQw89AuajqsM0UBKG9hyKf19HVSUXkAuOjDNV1oQQKZC50yx1atI8v9LpwOi0DygpXiLx5yHmmKO3N25SCxZB7B7i4OODEchfyDkBC9HrGO6LVcRuh3ZBPZAIYVfBiZCgZB');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function (req, res) {
 		for(var p in req.body){ var url = p; }
  		console.log(url);


  	FB.api('/225860594468080/feed', 'post', { link: url } , function (res) {
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


