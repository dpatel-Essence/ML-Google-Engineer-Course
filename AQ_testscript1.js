import { aq, op } from '@uwdata/arquero'
dt = aq.table({
  u: ['a', 'a', 'b', 'b'],
  x: Int32Array.of(1, 2, 3, 4),
  y: Float64Array.of(5, 6, 7, 8)
})

dt.view()

[dt.numCols(), dt.numRows()]