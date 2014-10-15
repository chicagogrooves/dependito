/* global window */
'use strict';

var madge = require('madge');

function Dependito(targetPath, options) {

    this.config = options || {};

    //TODO this appears not to be used- delete ?
    this.config.format = String(options.format || 'amd').toLowerCase();
    this.config.exclude = options.exclude || null;

    if(this.config.format==='json'){
        this.dependencies = this.config.directDeps;
    }else{
        this.dependencies = madge(targetPath, this.config).tree;
    }

    this.recentUpdates = options.recentUpdates || {};

    if (this.config.transform && typeof (this.config.transform) == "function") {
        this.dependencies = this.config.transform(this.dependencies);
    }

}

Dependito.prototype.generateHtml = function (options) {
    return require('./html').output(this.dependencies, options, this.recentUpdates);
};

module.exports = Dependito;
