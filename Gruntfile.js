module.exports = function(grunt) {
  grunt.initConfig({
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'compressed'
        },
        files: { // Dictionary of files
          'css/main.css': '_sass/main.scss', // 'destination': 'source'
          'css/calculator.css': '_sass/calculator.scss'
        }
      }
    },
    svgstore: {
      options: {
        prefix: 'shape-', // This will prefix each <g> ID
      },
      default: {
        files: {
          'img/svgs/svg-defs.svg': ['img/svg-src/*.svg'],
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'css/build/main.css': 'css/main.css',
          'css/build/calculator.css': 'css/calculator.css'
        }
      }
    },
    watch: {
      files: ['img/svg-src/*svg', '_sass/*', 'js/*'],
      tasks: ['svgstore', 'sass', 'autoprefixer']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ["sass", "svgstore", "autoprefixer"]);
};
