/**
 * @author Sreekanth Reddy
 */
grunt.initConfig({
  sass: {
    dist: {
      files: [{
        cwd: 'app/styles',
        src: '**/*.scss',
        dest: '../.tmp/styles',
        expand: true,
        ext: '.css'
      }]
    }
  },
  autoprefixer: {
    options: ['last 1 version'],
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/styles',
        src: '{,*/}*.css',
        dest: 'dist/styles'
      }]
    }
  },
  watch: {
    styles: {
      files: ['app/styles/{,*/}*.scss'],
      tasks: ['sass:dist', 'autoprefixer:dist']
    }
  }
});
grunt.registerTask('default', ['styles', 'watch']);