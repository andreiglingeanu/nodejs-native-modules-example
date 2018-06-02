let native = require('bindings')('native')

Array.apply(null, {length: 10})
  .map(Function.call, Number)
  .map(i => native.nativePrintf((i + 1) * 10))
