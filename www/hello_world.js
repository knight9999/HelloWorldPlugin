var HelloWorld = function() { };

HelloWorld.prototype.say = function(name, success, fail) {
	if (typeof success !== 'function') { 
		return new Promise((resolve, reject) => {
			cordova.exec( resolve, reject, "HelloWorldPlugin", "say", [name]);
		});
	} else {
		cordova.exec( success, fail, "HelloWorldPlugin", "say", [name]);
	}
};

module.exports = new HelloWorld();
