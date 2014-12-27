var _ = require('underscore')._;

var makeStats = countEfferent;

if (typeof exports == 'object' && exports === this) {
  module.exports = makeStats;
}


function countEfferent (adjacencies) {
  var depCounts = _.map(adjacencies, function(deps, source){
    return deps.length;
  })

  return depCounts.sort().reverse();
  //return [42, 23, 16, 15, 11, 5, 3, 2, 1, 30];
};
