"use strict"

module.exports = ndarrayDistance

var cwise = require("cwise")

var l0Distance = cwise({
  args: ["array", "array"],
  pre: function(a,b) {
    this.sum = 0
  },
  body: function(a,b) {
    if(a !== b) {
      this.sum += 1
    }
  },
  post: function(a,b) {
    return this.sum
  },
  funcName: "l0_distance"
})

var l1Distance = cwise({
  args: ["array", "array"],
  pre: function(a,b) {
    this.sum = 0.0
  },
  body: function(a,b) {
    this.sum += Math.abs(a - b)
  },
  post: function(a,b) {
    return this.sum
  },
  funcName: "l1_distance"
})

var l2Distance = cwise({
  args: ["array", "array"],
  pre: function(a,b) {
    this.sum = 0.0
  },
  body: function(a,b) {
    var d = a - b
    this.sum += d * d
  },
  post: function(a,b) {
    return Math.sqrt(this.sum)
  },
  funcName: "l2_distance"
})

var linfDistance = cwise({
  args: ["array", "array"],
  pre: function(a,b) {
    this.sum = 0.0
  },
  body: function(a,b) {
    this.sum = Math.max(Math.abs(a - b), this.sum)
  },
  post: function(a,b) {
    return this.sum
  },
  funcName: "linf_distance"
})

var lpDistance = cwise({
  args: ["array", "array", "scalar"],
  pre: function(a,b,p) {
    this.sum = 0.0
  },
  body: function(a,b,p) {
    this.sum += Math.pow(Math.abs(a - b), p)
  },
  post: function(a,b,p) {
    return Math.pow(this.sum, 1.0/p)
  },
  funcName: "lp_distance"
})

function ndarrayDistance(a, b, p) {
  if(p === undefined || p === 2.0) {
    return l2Distance(a, b)
  }
  if(p === 1.0) {
    return l1Distance(a, b)
  }
  if(p === Infinity) {
    return linfDistance(a, b)
  }
  if(p === 0) {
    return l0Distance(a, b)
  }
  if(p < 0) {
    throw new Error("p must be > 0")
  }
  return lpDistance(a, b, p)
}