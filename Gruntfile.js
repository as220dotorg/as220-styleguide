module.exports = function(grunt) {

    // Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile SASS
        sass: {
            dist: {
                options: {
                    style: 'compact'
                },
                files: {
                    'source/css/style.css': 'source/css/style.scss',
                    'source/css/styleguide-specific.css': 'source/css/styleguide-specific.scss'
                }
            }
        },

        // Build the styleguide
        shell: {
            target: {
                command: "php core/console --generate"
            }
        },

        // Watch for changes
        watch : {
            markup: {
                files: [
                    'source/_data/**/*.json',
                    'source/_data/**/*.js',
                    'source/_patterns/**/*.twig',
                    'source/_patterns/**/*.json',
                    'source/js/*.js'
                ], 
                tasks: ['shell'],
                options :{
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            styles: {
                files: [
                    'source/css/*.scss', 
                    'source/css/**/*.scss'
                ],
                tasks: ['sass','shell'],
                options :{
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        },

        // Start the server
        connect : {
            options: {
                port: 9000,
                hostname: 'localhost',
                base: 'public',
                livereload: 35729
            },
            livereload : {
                options: {
                    open: true
                }
            }
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('serve', ['sass', 'shell', 'connect:livereload','watch']);
};
