module.exports = function(grunt) {

  grunt.initConfig({
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'compressed'
        },
        files: { // Dictionary of files
          'css/main.css': '_sass/main.scss' // 'destination': 'source'
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
          'css/build/main.css': 'css/main.css'
        }
      }
    },
    criticalcss: {
      custom: {
        options: {
          url: "http://127.0.0.1:4000",
          width: 3000,
          height: 2000,
          outputfile: "css/build/critical.css",
          filename: "css/build/main.css", // Using path.resolve( path.join( ... ) ) is a good idea here
          buffer: 800 * 1024,
          ignoreConsole: false
        }
      }
    },



    watch: {
      files: ['img/svg-src/*svg', '_sass/*'],
      tasks: ['svgstore', 'sass', 'autoprefixer', 'criticalcss']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-criticalcss');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'criticalcss']);
};
