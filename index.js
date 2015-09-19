'use strict'

var BaseEvent = require('value-event/base-event')
var extend = require('xtend')

module.exports = BaseEvent(onChange)

function onChange (event, broadcast) {
  var target = event.target
  var valid = target.type === 'file' && event.type === 'change'

  if (!valid) {
    if (event.startPropagation) event.startPropagation()
    return
  }

  var data = extend({files: target.files}, this.data)

  broadcast(data)
}
