/* global window */
'use strict';

var madge = require('madge');

function Dependito(targetPath, options) {

    this.config = options || {};
    this.config.format = String(options.format || 'amd').toLowerCase();
    this.config.exclude = options.exclude || null;

    this.dependencies = madge(targetPath, this.config).tree;

    this.recentUpdates = options.recentUpdates || {};

    if (this.config.transform && typeof (this.config.transform) == "function") {
        this.dependencies = this.config.transform(this.dependencies);
    }

}

Dependito.prototype.generateHtml = function (options) {
    return require('./html').output(this.dependencies, options, this.recentUpdates);
};

module.exports = Dependito;
