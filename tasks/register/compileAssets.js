module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
    'weThemeEmberHandlebars:dev',
		'coffee:dev'
	]);
};