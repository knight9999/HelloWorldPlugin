var HelloWorld = function() { };

HelloWorld.prototype.say = function(success,fail) {
	cordova.exec( success, fail, "HelloWorldPlugin", "say", []);
};

module.exports = new HelloWorld();
