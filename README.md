# dom-knob
Get the angle between the center of an element and a mouse/touch on drag.

### install
```sh
npm install dom-knob
```

### example
```js
var knob = require('dom-knob')

var elem = document.querySelector('#myKnob')
var callback = function(degrees) {
  console.log(degrees)
}

knob(elem, callback)
```
