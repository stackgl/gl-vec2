var test = require('tape')
var vec2 = require('../')
var EPSILON = require('../epsilon')

test('add', function (t) {
  var result = vec2.add([], [0, 1], [2, 3])
  t.deepEqual(result, [2, 4])
  t.end()
})

test('ceil', function (t) {
  var result = vec2.ceil([], [5.2, 6.5])
  t.deepEqual(result, [6, 7])
  t.end()
})

test('clone', function (t) {
  var result = vec2.clone([5, 6])
  t.deepEqual(result, [5, 6])
  t.end()
})

test('copy', function (t) {
  var result = vec2.copy([], [5, 6])
  t.deepEqual(result, [5, 6])
  t.end()
})

test('create', function (t) {
  var result = vec2.create()
  t.deepEqual(result, [0, 0])
  t.end()
})

test('cross', function (t) {
  var result = vec2.cross([], [3, 4], [5, 6])
  t.deepEqual(result, [0, 0, -2])
  t.end()
})

test('distance', function (t) {
  var result = vec2.distance([1, 2], [4, 6])
  t.equal(result, 5)
  t.end()
})

test('dist', function (t) {
  var result = vec2.dist([1, 2], [4, 6])
  t.equal(result, 5)
  t.end()
})

test('divide', function (t) {
  var result = vec2.divide([], [8, 4], [2, 1])
  t.deepEqual(result, [4, 4])
  t.end()
})

test('div', function (t) {
  var result = vec2.div([], [8, 4], [2, 1])
  t.deepEqual(result, [4, 4])
  t.end()
})

test('dot', function (t) {
  var result = vec2.dot([3, 4], [5, 6])
  t.deepEqual(result, 39)
  t.end()
})

test('equals', function (t) {
  t.ok(vec2.equals([3 + EPSILON, 5 - EPSILON], [3, 5]))
  t.notOk(vec2.equals([3 + EPSILON * 10, 5 - EPSILON], [3, 5]))
  t.notOk(vec2.equals([3 + EPSILON, 5 - EPSILON * 10], [3, 5]))
  t.end()
})

test('exactEquals', function (t) {
  t.ok(vec2.exactEquals([3, 5], [3, 5]))
  t.notOk(vec2.exactEquals([3 + EPSILON, 5], [3, 5]))
  t.notOk(vec2.exactEquals([3, 5 - EPSILON], [3, 5]))
  t.end()
})

test('floor', function (t) {
  var result = vec2.floor([], [5.2, 6.6])
  t.deepEqual(result, [5, 6])
  t.end()
})

test('forEach', function (t) {
  var a = [null,
    0, 1, null,
    2, 3, null
  ]

  function addConstant (out, a, val) {
    out[0] = a[0] + val
    out[1] = a[1] + val
    return out
  }

  vec2.forEach(a, 3, 1, 2, addConstant, 7)

  t.deepEqual(a, [null, 7, 8, null, 9, 10, null])
  t.end()
})

test('fromValues', function (t) {
  var result = vec2.fromValues(2, 3)
  t.deepEqual(result, [2, 3])
  t.end()
})

test('inverse', function (t) {
  var result = vec2.inverse([], [2, 4])
  t.deepEqual(result, [0.5, 0.25])
  t.end()
})

test('length', function (t) {
  var result = vec2.length([3, 4])
  t.deepEqual(result, 5)
  t.end()
})

test('len', function (t) {
  var result = vec2.len([3, 4])
  t.deepEqual(result, 5)
  t.end()
})

test('lerp', function (t) {
  var result = vec2.lerp([], [3, 4], [5, 6], 0.25)
  t.deepEqual(result, [3.5, 4.5])
  t.end()
})

test('max', function (t) {
  var result = vec2.max([], [3, 7], [5, 6])
  t.deepEqual(result, [5, 7])
  t.end()
})

test('min', function (t) {
  var result = vec2.min([], [3, 7], [5, 6])
  t.deepEqual(result, [3, 6])
  t.end()
})

test('multiply', function (t) {
  var result = vec2.multiply([], [3, 4], [5, 6])
  t.deepEqual(result, [15, 24])
  t.end()
})

test('mul', function (t) {
  var result = vec2.mul([], [3, 4], [5, 6])
  t.deepEqual(result, [15, 24])
  t.end()
})

test('negate', function (t) {
  var result = vec2.negate([], [3, 4])
  t.deepEqual(result, [-3, -4])
  t.end()
})

test('normalize', function (t) {
  var result = vec2.normalize([], [3, 4])
  t.ok(Math.abs(result[0] - 0.6) < EPSILON)
  t.ok(Math.abs(result[1] - 0.8) < EPSILON)
  t.end()
})

test('random', function (t) {
  var result = vec2.random([], 5)
  for (var i = 0; i < 10; i++) {
    var len = Math.sqrt(result[0] * result[0] + result[1] * result[1])
    t.ok(Math.abs(5 - len) <= EPSILON)
  }
  t.end()
})

test('rotate', function (t) {
  var result = vec2.rotate([], [1, 2], Math.PI)
  t.ok(Math.abs(result[0] - (-1)) < EPSILON)
  t.ok(Math.abs(result[1] - (-2)) < EPSILON)
  t.end()
})

test('round', function (t) {
  var result = vec2.round([], [5.2, 6.6])
  t.deepEqual(result, [5, 7])
  t.end()
})

test('scale', function (t) {
  var result = vec2.scale([], [3, 4], 2)
  t.deepEqual(result, [6, 8])
  t.end()
})

test('scaleAndAdd', function (t) {
  var result = vec2.scaleAndAdd([], [3, 4], [5, 6], 2)
  t.deepEqual(result, [13, 16])
  t.end()
})

test('set', function (t) {
  var result = vec2.set([], 3, 4)
  t.deepEqual(result, [3, 4])
  t.end()
})

test('squaredDistance', function (t) {
  var result = vec2.squaredDistance([3, 4], [5, 6])
  t.deepEqual(result, 8)
  t.end()
})

test('sqrDist', function (t) {
  var result = vec2.sqrDist([3, 4], [5, 6])
  t.deepEqual(result, 8)
  t.end()
})

test('squaredLength', function (t) {
  var result = vec2.squaredLength([3, 4])
  t.deepEqual(result, 25)
  t.end()
})

test('sqrLen', function (t) {
  var result = vec2.sqrLen([3, 4])
  t.deepEqual(result, 25)
  t.end()
})

test('subtract', function (t) {
  var result = vec2.subtract([], [3, 4], [5, 6])
  t.deepEqual(result, [-2, -2])
  t.end()
})

test('sub', function (t) {
  var result = vec2.sub([], [3, 4], [5, 6])
  t.deepEqual(result, [-2, -2])
  t.end()
})

test('transformMat2', function (t) {
  var result = vec2.transformMat2([], [3, 4], [5, 6, 7, 8])
  t.deepEqual(result, [43, 50])
  t.end()
})

test('transformMat2d', function (t) {
  var result = vec2.transformMat2d([], [3, 4], [5, 6, 7, 8, 9, 10])
  t.deepEqual(result, [52, 60])
  t.end()
})

test('transformMat3', function (t) {
  var result = vec2.transformMat3([], [3, 4], [
    5, 6, null,
    8, 9, null,
    11, 12, null
  ])
  t.deepEqual(result, [58, 66])
  t.end()
})

test('transformMat4', function (t) {
  var result = vec2.transformMat4([], [3, 4], [
    5, 6, null, null,
    7, 8, null, null,
    null, null, null, null,
    9, 10, null, null
  ])
  t.deepEqual(result, [52, 60])
  t.end()
})
