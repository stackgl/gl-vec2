module.exports = limit;

var squaredLength = require("./squaredLength");
var scale = require("./scale");
var copy = require("./copy");

/**
 * Limit the magnitude of this vector to the value used for the `max`
 * parameter.
 *
 * @method limit
 * @param  the vector to limit
 * @param  max the maximum magnitude for the vector
 * @returns out
 */
function limit(out, a, max) {
  var mSq = squaredLength(a);

  if (mSq > max * max) {
    var n = Math.sqrt(mSq);
    out[0] = a[0] / n * max;
    out[1] = a[1] / n * max;
  } else {
    out[0] = a[0];
    out[1] = a[1];
  }

  return out;
}
