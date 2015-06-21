module.exports = function(grunt) {

  grunt.initConfig({

    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: { // Dictionary of files
          'css/main.css': '_sass/main.scss' // 'destination': 'source'
        }
      }
    },
    svgstore: {
      options: {
        prefix : 'shape-', // This will prefix each <g> ID
      },
      default : {
        files: {
          'img/svgs/svg-defs.svg': ['img/svg-src/*.svg'],
        }
      }
    },
    watch: {
      files: ['img/svg-src/*svg','_sass/*'],
      tasks: ['svgstore','sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgstore');

  grunt.registerTask('default', ['sass']);
};
