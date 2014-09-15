
module.exports = function(grunt) {

  //ar themeEngine = require('we-theme-engine');

  grunt.config.set('weThemeEmberHandlebars', {
    dev: {
      options: {
        // theme template folder to override templates
        //themeTemplatesFolder: themeEngine.getThemeTemplatesToProcess()
      },
      // local files
      files: [
        'assets/ember/*/templates/**/*.hbs'
      ],
      dest: '.tmp/public/tpls.hbs.js'
    }
  });

  grunt.loadNpmTasks('grunt-we-ember-template');
};
