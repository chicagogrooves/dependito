dependito
===========

Visualize your CommonJS or AMD module dependencies in a force directed graph report - powered by [D3.js](http://d3js.org/).

Introduction
-------------

Let me introduce dependito - A small visualization tool that draws a force directed graph of JavaScript dependencies that has been annotated with either CommonJS, or AMD. Behind the scene I’m using a wonderful library named [node-madge](https://github.com/pahen/node-madge/), to extract the dependencies and combined with the power of [D3.js](http://d3js.org/) I draw a beautiful zoomable directed graph.

Features
-------------
- Draw a graph of nodes, where each module is represented as a node.
- Google Maps's like zooming, dragging and panning.
- Connect nodes with it's dependencies via lines.
- Hovering a node will highlight it's direct dependencies.
- It's possible to drag a node to a specific position, to re-layout the graph.

Report example
-------

The best way to show something is by example, so here I generated a graph of the official RequireJS [multipage](https://github.com/requirejs/example-multipage) example:

![Example](https://raw.github.com/auchenberg/dependito/gh-pages/example/dependito.jpg)

See the example here: http://auchenberg.github.com/dependito/example

Installation
------------
To install as a library:

    $ npm install dependito

To install the command-line tool:

    $ sudo npm -g install dependito


CLI
---
    Usage: dependito [options] <file|dir ...>

    Options:

        -h, --help               output usage information
        -V, --version            output the version number
        -f, --format <name>      format to parse (amd/cjs/json)
        -t, --title <title>      title of generated document
        -r, --recent <filename>  a json file of recent updates
        -v, --reverse            reverse direction of arrows
        -d, --deps <filename>    when used with '-f json', a file to load deps from in {p1:['c1','c2']} format
        -x, --exclude <regex>    a regular expression for excluding modules

### Generate AMD report to doc/require.html

    $ dependito -f amd /path/src > doc/require.html

API
---
```JavaScript

  var dependito = require('dependito');

  // Fire up an dependito instance
  var dependito = new dependito(src, {
    format: 'amd',
    exclude: '^node_modules',
    transform: function(dep){
        //Apply a transformation on dependencies
        ....

        return dep;

    }
  });

  dependito.generateHtml();
  ...
```

Roadmap
-------
dependito is still very much in progress, so here is the todo-list:

- Proper label positioning: Avoid label collisions and make the graph more readable.
- Testing! Unit tests of D3 render logic

Thanks to
-----------
This project wouldn't have been possible without the great work on [node-madge](https://github.com/pahen/node-madge/) by Patrik Henningson, or wonderful [D3.js](http://d3js.org/) library.


Inspiration
-----------
http://bl.ocks.org/1153292
