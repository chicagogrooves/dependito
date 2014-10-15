/* global window */
'use strict';

var madge = require('madge');

function Dependo(targetPath, options) {

    this.config = options || {};
    this.config.format = String(options.format || 'amd').toLowerCase();
    this.config.exclude = options.exclude || null;

    this.dependencies = madge(targetPath, this.config).tree;

    //TODO calculate these, actually
    this.recentUpdates = options.recentUpdates || {};

    if (this.config.transform && typeof (this.config.transform) == "function") {
        this.dependencies = this.config.transform(this.dependencies);
    }

}

Dependo.prototype.generateHtml = function (options) {
    return require('./html').output(this.dependencies, options, this.recentUpdates);
};

module.exports = Dependo;
