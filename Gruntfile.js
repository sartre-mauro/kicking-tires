module.exports = function(grunt) {

	grunt.registerTask('default', function() {
		console.log("Got It!");
	});

	grunt.registerTask('greeting', function(name) {
		console.log("Name: " + name);
	});

	grunt.registerTask('add', function(a,b) {
		var c = Number(a) + Number(b);
		console.log(a + " + " + b + " = " + c);
	});
}