/*
	Find package.json of running process
	Find version/repo in package.json

*/

var fs = require('fs');
var path = require('path');

var dirs = process.cwd().split('/');

(function loop() {
	if (!dirs.length) return console.log('emit no package.json found');

	var next = '/' + path.join.apply(null, dirs);

	fs.readFile(path.join(next, 'package.json'), function(err, data) {
		if (err) {
			dirs.pop();
			return loop();
		}

		var pkg = JSON.parse(data);
		var currentVersion = pkg.version;

		console.log(currentVersion);
	});
})();