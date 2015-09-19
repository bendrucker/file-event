'use strict'

var test = require('tape')
var thermometer = require('thermometer')
var dispatchEvent = require('dispatch-event')
var Component = require('./component')

test(function (t) {
  t.plan(1)

  thermometer.createComponent(Component, function (state, element, done) {
    element.files = [{}]
    dispatchEvent(element, 'change')
    t.equal(state.files().length, 1)
    done()
  })
})

