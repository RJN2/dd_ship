#global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-autoprefixer"
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig
   
    # Sass
    sass:
      options: [
        sourceMap: true # Create source map
        outputStyle: "compressed" # Minify output
      ]
      dist:
        files: [
          expand: true # Recursive
          cwd: "assets" # The startup directory
          src: ["css/**/*.scss"] # Source files
          dest: "stylesheets" # Destination
          ext: ".css" # File extension
        ]

    # Autoprefixer
    autoprefixer:
      options: [
        browsers: ["last 2 versions"]
        map: true # Update source map (creates one if it can't find an existing map)
      ]
      
      # Prefix all files
      multiple_files:
        src: "stylesheets/**/*.css"


    copy:
      jquery:
        files: [{
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.js"
          dest: "vendor/js/"
        }]
      classie:
        files: [{
          expand: true
          cwd: "bower_components/classie/"
          src: "classie.js"
          dest: "vendor/js/"
        }]
      bootstrap:
        files: [{
          expand: true
          cwd: "bower_components/bootstrap/dist/css/"
          src: "bootstrap.min.css"
          dest: "vendor/css/"
        },
        {
          expand: true
          cwd: "bower_components/bootstrap/dist/js/"
          src: "bootstrap.min.js"
          dest: "vendor/js/"
        }]
      d3:
        files: [{
          expand: true
          cwd: "bower_components/d3/"
          src: "d3.min.js"
          dest: "vendor/js/"
          }]

    exec:
      jekyll:
        cmd: "jekyll build --trace"

    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "stylesheets/css/**/*"
          "assets/js/**/*"
          "_config.yml"
          "*.html"
          "*.md"
        ]
        tasks: [
          "exec:jekyll"
        ]
      css:
        files: [
          "assets/css/**/*.scss"
        ]
        tasks: [
          "sass"
          "autoprefixer"
        ]
        options:
          spawn: false

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]
  
  grunt.registerTask "prod", [
    "sass"
    "autoprefixer"
  ]