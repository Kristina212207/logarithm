"use strict";
let start = Date.now();
let stopwatch = 0;
for (var i = 0; i < 100000000; i++) {
  var log = Math.log(i);
  var finish = Date.now();
  let freezingStopwatch = stopwatch;
  stopwatch = Math.floor((finish - start) / 1000);
  if (stopwatch != freezingStopwatch) {
    console.log(`Просчитано ${i} чисел. Прошло ${stopwatch} сек.`);
    console.log("=======================================================");
  }
}
stopwatch = (finish - start) / 1000;
console.log(`В итоге рассчитано ${i} чисел, а прошло ${stopwatch} сек.`);
