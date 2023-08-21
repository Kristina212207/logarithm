let start = Date.now();
let difference = 0;
let diff2 = 0;
let count = 0;
for (var i = 0; i < 100000000; i++) {
  var log = Math.log(i);
  count++;
  var finish = Date.now();
  diff2 = difference;
  difference = Math.floor((finish - start) / 1000);
  if (difference != diff2) {
    console.log(`Просчитано ${count} чисел. Прошло ${difference} сек.`);
    console.log("=======================================================");
  }
}
difference = (finish - start) / 1000;
console.log(`В итоге рассчитано ${i} чисел, а прошло ${difference} сек.`);
