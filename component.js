'use strict'

var State = require('dover')
var Observ = require('observ')
var h = require('virtual-dom/h')
var fileEvent = require('./')

module.exports = Component

function Component () {
  return State({
    files: Observ(),
    channels: {
      change: change
    }
  })
}

function change (state, data) {
  state.files.set(data.files)
}

Component.render = function render (state) {
  return h('input', {
    type: 'file',
    'ev-change': fileEvent(state.channels.change)
  })
}
