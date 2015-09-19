# file-event [![Build Status](https://travis-ci.org/bendrucker/file-event.svg?branch=master)](https://travis-ci.org/bendrucker/file-event)

> File input handler for [value-event](https://github.com/raynos/value-event)


## Install

```
$ npm install --save file-event
```


## Usage

```js
var h = require('virtual-dom/h')
var fileEvent = require('file-event')

h('input', {
  type: 'file',
  'ev-change': fileEvent(onFiles)
})

function onFiles (data) {
  console.log(data.files)
  //=> [...]
}
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
