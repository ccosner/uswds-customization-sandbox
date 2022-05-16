/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './dist/assets/css';
uswds.paths.dist.js = './dist/assets/js';
uswds.paths.dist.img = './dist/assets/img';
uswds.paths.dist.fonts = './dist/assets/fonts';
uswds.paths.dist.theme = './sass';

/**
 * Exports
 * Add as many as you need
 */

// Run once
exports.init = uswds.init;

// Run always
exports.default = uswds.watch;