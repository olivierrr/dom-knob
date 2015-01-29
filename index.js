
module.exports = knob

function knob(elem, cb) {
  if(typeof elem !== 'object') {
    throw new Error('knob(elem, callback')
  }

  if(typeof cb !== 'function') {
    throw new Error('knob(elem, callback')
  }

  var isDragging = false

  document.addEventListener('mouseup', onUp)
  document.addEventListener('touchend', onUp)
  elem.addEventListener('mousedown', onDown)
  elem.addEventListener('touchstart', onDown)
  document.addEventListener('mousemove', onMove) 
  document.addEventListener('touchmove', onMove)

  function onDown() {
    isDragging = true
  }

  function onUp() {
    isDragging = false
  }

  function onMove(e) {
    if(!isDragging) {
      return
    }

    if(e.touches) {
      e = e.touches[0]
    }

    var rect = elem.getBoundingClientRect()
    var centerX = (rect.width / 2) + rect.left
    var centerY = (rect.height / 2) + rect.top
    var radians = Math.atan2(e.clientX - centerX, e.clientY - centerY)

    cb(Math.abs(radians * (180/Math.PI) - 180))
  }
}
