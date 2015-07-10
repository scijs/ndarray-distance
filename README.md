ndarray-distance
================
Computes the [Lp distance](http://en.wikipedia.org/wiki/Lp_space) between two [ndarrays](https://github.com/mikolalysenko/ndarray).  Works both in node.js and in browserify.

[![build status](https://secure.travis-ci.org/scijs/ndarray-distance.png)](http://travis-ci.org/scijs/ndarray-distance)

## Example

```javascript
var distance = require("ndarray-distance")
var ndarray = require("ndarray")

//Create two arrays
var a = ndarray([1, 2, 3, 4, 5])
var b = ndarray([0, 2, 3, 10, 6])


//First compute sum of squared distances
var l2Dist = distance(a, b)

//Can also compute l1 distance (absolute difference)
var l1Dist = distance(a, b, 1)

//And maximum distance
var linfDist = distance(a, b, Infinity)

//And any other Lp distance as well
var l3Dist = distance(a, b, 3)
```

## Install
Install using [npm](https://www.npmjs.com/):

    npm install ndarray-distance

## API

#### `require("ndarray-distance")(a, b[, p])`
Computes the Lp distance between two ndarrays `a` and `b`.  That is,

```
dist(a,b,p) = ( sum |a[i] - b[i]|^p )^(1/p)
```

Note that here `a` and `b` do not have to be vectors and can be images or volumes.

* `a` and `b` are both ndarrays with the same shape
* `p` is a parameter that determines the exponent of the metric.  The default value is `p=2`

Special values of `p` include:

* `p=0` which counts the number of entries where `a` and `b` differ
* `p=1` which is the absolute difference between `a` and `b`
* `p=2` which is the ordinary Euclidean sum of squared differences
* `p=Infinity` which is the maximum absolute difference between `a` and `b`

**Returns** The Lp distance between `a` and `b`

## License
(c) 2014 Mikola Lysenko. MIT License