/**
 * Minify PNG, JPEG, GIF and SVG images.
 * @tasks/images
 */

'use strict';

const $ = require('gulp-load-plugins')();
const gifsicle = require('imagemin-gifsicle');
const jpegtran = require('imagemin-jpegtran');
const pngquant = require('imagemin-pngquant');

/**
 * @param gulp - Gulp instance
 * @param browser - Browser sync instance
 * @param options - object
 * options.src : Directory of images to optimize.
 * options.dist : Output directory.
 * @param flags - object
 * flags.minify : boolean
 * flags.sourcemap : boolean
 * @returns {Function}
 */
module.exports = (gulp, browser, options, flags) => {

  return () => {

    return gulp.src(options.src)
      // .pipe(flags.sourcemap ? $.util.noop() : $.imagemin({
      //   progressive: true,
      //   svgoPlugins: [{removeViewBox: false}],
      //   use: [
      //     gifsicle({interlaced: true}),
      //     jpegtran({progressive: true}),
      //     pngquant()
      //   ]
      // }))
      .pipe(gulp.dest(options.dist))
      .pipe(browser.stream());

  };

};
