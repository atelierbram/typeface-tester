module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
  pkg: grunt.file.readJSON("package.json"),
  // Sass task
   sass: {
     options: {
       implementation: require('node-sass'),
       sourceMap: true,
     },
     dist: {
       files: {
         "build/assets/css/critical.css": "src/assets/sass/critical.scss",
         "build/assets/css/style.css": "src/assets/sass/style.scss",
         "build/assets/css/typefaces.css": "src/assets/sass/typefaces.scss",
       }
     }
   },

  // Post CSS task
   postcss: {
     options: {
       map: {
         inline: false, // save all sourcemaps as separate files...
       },
       processors: [
         require("autoprefixer")(),
         require('cssnano')()
       ]
     },
     dist: {
       // expand: true,
       // flatten: true,
       files: {
         "build/assets/css/critical.min.css": "build/assets/css/critical.css",
         "build/assets/css/style.min.css": "build/assets/css/style.css",
         "build/assets/css/typefaces.min.css": "build/assets/css/typefaces.css",
       }
     }
   },
  // Watch task
   watch: {
     options: {
       livereload: 35729,
     },

     sass: {
       files: ["src/assets/sass/**/*.scss"],
       tasks: ['sass','postcss','copy'],
       options: {
         //   spawn: false,
         //   livereload: true
       }
     },
     js: {
       files: ['src/assets/js/**/*.js'],
       tasks: ['concat','uglify'],
       options: {
         // spawn: false
       }
     },
     gruntfile: {
       files: "gruntfile.js",
       options: {
         // spawn: false,
         // livereload: true,
         // reload: true
       }
     }
   },
   // Clean task
   clean: {
      css: {
       src: ["docs/assets/css/**/*.css","build/assets/css/**/*.css"]
     },
     map: {
       src: ["docs/assets/css/**/*.map","build/assets/css/**/*.map"]
     },
     all: {
       src: ["docs/assets/css/**/*.css","docs/assets/css/**/*.map"]
     }
   },

   uglify: {
     options: {
       // livereload: true,
       // preserveComments: 'false'
       preserveComments: /^!/
       // only preserve comments that start with a bang
       // https://github.com/gruntjs/grunt-contrib-uglify/issues/366
     },
     dist: {
       files: {
         'build/assets/js/cssrelpreload.min.js': ['src/assets/js/cssrelpreload.js'],
         'build/assets/js/head-detect.min.js': ['src/assets/js/head-detect.js'],
         'docs/assets/js/typeface-tester-v3.min.js': ['src/assets/js/typeface-tester-v3.js']
       }
     }
   },
   concat: {
     dist: {
       files: {
         // 'docs/assets/js/concat.min.js' : ['build/assets/js/fontfaceobserver.min.js'],
       }
     }
   },
   copy: {
     main: {
       files: {
         'src/inc/critical.css.inc': "build/assets/css/critical.min.css",
         'src/inc/cssrelpreload.js.inc':'build/assets/js/cssrelpreload.min.js',
         'src/inc/head-detect.js.inc': 'build/assets/js/head-detect.min.js',
       },
       flatten: true,
       filter: 'isFile',
     },
   },

   htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'docs/index.html': 'build/html/index.html'
      }
    }
  },

   purgecss: {
     dist: {
       options: {
         content: ['build/html/index.html', 'src/assets/js/typeface-tester-v3.js', 'src/assets/js/head-detect.js', 'https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js']
       },
       extractors: {
         extractor: class {
           static extract(content) {
             content.match(/a-Z/) || []
           }
         },
         extension: ['html']
       },
       files: {
         'docs/assets/css/style.min.css':'build/assets/css/style.min.css',
         'docs/assets/css/typefaces.min.css': 'build/assets/css/typefaces.min.css'
       }
     }
   }

 });

  // Load the plugins to run your tasks
  require("load-grunt-tasks")(grunt, {
    scope: "devDependencies"
  });
  // Default task(s).
  grunt.registerTask("default", [
    "clean:all",
    "sass",
    "postcss:dist",
    "uglify",
    "concat",
    "copy",
    "watch",
    "htmlmin",
    "purgecss"
  ]);
  grunt.registerTask('build', ['clean','concat', 'uglify', 'sass', 'postcss:dist',  'copy', 'htmlmin', 'purgecss']);
};
