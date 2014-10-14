/* global recentUpdates graph */
;(function(){
    //console.debug("Showing updates", recentUpdates);
    _.each([
        [recentUpdates.added, "treediff-added"],
        [recentUpdates.parentChanged, "treediff-parent-changed"],
        [recentUpdates.childrenChanged, "treediff-children-changed"]
        ], function(pair){
        var nodes = pair[0];
        var klass = pair[1];

        _.each(nodes, function(module){
            var origClass = graph.select(".circle-" + module).attr("class");
            graph.select(".circle-" + module).attr("class", origClass + " " + klass);
        });
    })

}());
