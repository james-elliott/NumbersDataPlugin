const sketch = require('sketch')
const { DataSupplier } = sketch
const util = require('util')

export function onStartup () {
  // To register the plugin, uncomment the relevant type:
  DataSupplier.registerDataSupplier('public.text', '1000000', 'SevenDigits');
  DataSupplier.registerDataSupplier('public.text', '100000', 'SixDigits');
  DataSupplier.registerDataSupplier('public.text', '10000', 'FiveDigits');
  DataSupplier.registerDataSupplier('public.text', '1000', 'FourDigits');
  DataSupplier.registerDataSupplier('public.text', '100', 'ThreeDigits');
  DataSupplier.registerDataSupplier('public.text', '10', 'TwoDigits');
  DataSupplier.registerDataSupplier('public.text', '1', 'OneDigits');
}

export function onShutdown () {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers()
}

export function onSevenDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(9999999);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onSixDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(999999);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onFiveDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(99999);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onFourDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(9999);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onThreeDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(999);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onTwoDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(99);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

export function onOneDigits (context) {
  let dataKey = context.data.key
  const items = util.toArray(context.data.items).map(sketch.fromNative)
  items.forEach((item, index) => {
    let data = randomNum(9);
    DataSupplier.supplyDataAtIndex(dataKey, data, index)
  })
}

function randomNum (length = 100) {

  let number = Math.floor(Math.random() * length).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return number;
}
