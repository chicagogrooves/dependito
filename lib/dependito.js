/* global window */
'use strict';

var madge = require('madge');
var _ = require('underscore')._;

function Dependito(targetPath, options) {

    var config = options || {};
    _.extend(config, options.cliOptions);

    var dependencies = options.directDeps || madge(targetPath, config).tree;
    var recentUpdates = options.recentUpdates || {};
    if (options.transform && typeof(options.transform) === "function") {
        dependencies = options.transform(dependencies);
    }

    var statsData = [42, 23, 16, 15, 11, 5, 3, 2, 1, 1];
    this.generateHtml = function () {
        return require('./html').output.call(config, dependencies, recentUpdates, statsData);
    };

}

module.exports = Dependito;
