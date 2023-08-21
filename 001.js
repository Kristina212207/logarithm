"use strict";
let start = Date.now();
let difference1 = 0;
let difference2 = 0;
let count = 0;
for (var i = 0; i < 100000000; i++) {
  var log = Math.log(i);
  count++;
  var finish = Date.now();
  difference2 = difference1;
  difference1 = Math.floor((finish - start) / 1000);
  if (difference1 != difference2) {
    console.log(`Просчитано ${count} чисел. Прошло ${difference1} сек.`);
    console.log("=======================================================");
  }
}
difference1 = (finish - start) / 1000;
console.log(`В итоге рассчитано ${i} чисел, а прошло ${difference1} сек.`);
