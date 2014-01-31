"use strict"

var ndarray = require("ndarray")
var distance = require("../dist")
var tape = require("tape")
var almostEqual = require("almost-equal")

tape("ndarray-distance", function(t) {
  var a = ndarray([1, 2, 3, 4, 5])
  var b = ndarray([0, 2, 3, 10, 6])

  t.ok(almostEqual(distance(a, b), Math.sqrt(1 + 6*6 + 1), almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(distance(a, b, 1), 1 + 6 + 1, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(distance(a, b, Infinity), 6, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(distance(a, b, 0), 3, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.ok(almostEqual(distance(a, b,3), Math.pow(1 + 6*6*6 + 1, 1.0/3.0), almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))

  t.end()
})
