module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: false,
              outputStyle: 'compressed'
          },
          dist: {
              files: {
                  'css/style.css': 'styles/main.scss'
              }
          }
      },
      postcss: {
          options: {
              map: false,
              processors: [
                  require('autoprefixer')
              ]
          },
          dist: {
              src: 'css/*.css'
          }
      },
      watch: {
          scripts: {
              files: ['styles/*.scss'],
              tasks: ['sass', 'postcss:dist'],
              options: {
                spawn: false,
              },
          }
      }
  });

  grunt.registerTask('default', ['watch:scripts']);
  grunt.registerTask('css', ['sass:dist', 'postcss:dist']);
};