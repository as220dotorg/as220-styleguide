module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'compact'
        },
        files: {
          'output/assets/css/foo.css': 'source/sass/foo.scss'
        }
      }
    },
    assemble: {
      dev: {
        options: {
          data: 'source/data/*.{json,yml}',
          layout: false,
          partials: 'source/templates/partials/**/*.hbs',
          collections: [
            {
              name: 'navTags',
              inflection: 'navTag'
            }
          ]
        },
        files: [
          {
            expand: true,
            cwd: 'source/templates/pages',
            src: '**/*.{hbs,md}',
            dest: 'output/'
          }
        ]
      }
    },
    clean: ['output/*.html'],
    connect: {
      preview: {
        options: {
          base: ['output'],
          port: 9000,
          hostname: 'localhost',
          keepalive: false,
          livereload: 35729,
          open: 'http://0.0.0.0:9000/'
        }
      }
    },
    watch: {
      templates: {
        files: [
          'source/templates/**/*.{hbs,md}', 'source/pages/**/*.{hbs,md}', 'source/data/**/*.json', 'source/sass/**/*.scss'
        ],
        tasks: ['assemble', 'sass:dev']
      },
      livereload: {
        options: {
          livereload: '<%= connect.preview.options.livereload %>'
        },
        files: ['output/**.*']
      }
    }
  });
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('build', ['clean', 'assemble', 'sass:dev']);
  grunt.registerTask('server', ['build', 'connect', 'watch']);
  grunt.registerTask('default', ['server']);
};
