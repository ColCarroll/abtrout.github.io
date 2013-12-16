
### counter.js

is/was a websocket server that kept track of how many times the logitank was plugged in. It was live for a few weeks, but I took it down because:

* Nobody but me and @[icgood](http://github.com/icgood) ever clicked on it. 
* Socket.io.js weighs in around 70kb and that seems a bit excessive for such a stupid project. 
* I never figured out a great way to make the counter look nice.
* #thatsjusthowiroll

Eventually I'd like to replace socket.io and just use httpd and native HTML5 websockets. That might happen. It's possible. What's more likely, though, is that this will end up in its own branch in a week or two and something totally different will be on [logitank.net](http://logitank.net)! 

