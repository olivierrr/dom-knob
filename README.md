# dom-knob
Get the angle between the center of an element and users finger/mouse on drag

### install
```sh
npm install knob
```

### example
```js
var knob = require('knob')

var elem = document.querySelector('#myKnob')
var callback = function(degrees) {
  console.log(degrees)
}

knob(elem, callback)
```
