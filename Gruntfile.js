module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({//가. 프로젝트환경설정
    pkg: grunt.file.readJSON('package.json'),//플러그인 설정
    serve: {
        options: {
            port: 9000
        }
    },//less 플러그인 설정
    less: {
        product: {//여기서 product(사용자에게 보여줄)와 development(개발자만보면되는)는 맘대로 작명.
            options: {
                paths: ['assets/css'],
                compress:"true"
            },
            files: {
                'assets/css/style.css': 'assets/less/import.less'
            }
        },
        development: {
            options: {
                paths: ['assets/css'],
                dumpLineNumbers:"comments"
            },
            files: {
                'assets/css/style.dev.css': 'assets/less/import.less'
            }
        }
    },
    watch: {
      scripts: {
        files: ['assets/less/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        },
      },
    },


  });

  // Load the plugin that provides the "uglify" task.
 grunt.loadNpmTasks('grunt-serve');
 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
 

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
