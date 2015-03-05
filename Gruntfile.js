'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({

    jshint: {
      dev: {
        options: {     
          jshintrc: '../../../.jshintrc',
          force: true
        },
        src: ['Gruntfile.js', 'index.js', 'routes/*.js', 'test/*.js', 'models/*.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          config: true,
          preset: "google",
          force: true
        },
        files: {
          src: ['Gruntfile.js', 'index.js', 'routes/*.js', 'test/*.js', 'models/*.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);
};
