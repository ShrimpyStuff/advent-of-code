const input = require(`./input.json`);
const arr = [];

for (i = 0; i < input.length; i++) {
    const code = input[i];
    const split = code.split("");
    let rtop = 127;
    let rbottom = 0;
    let ctop = 7;
    let cbottom = 0;


        for (j = 0; j < 7; j++) {
            const diff = Math.round((rtop - rbottom) / 2)
            if (split[j] == "F") {
            rtop -= diff;
            } else if (split[j] == "B") {
            rbottom += diff;
            }
        }
        for (k = 7; k < 10; k++) {
            const diff = Math.round((ctop - cbottom) / 2)
            if (split[k] === "L") {
            ctop -= diff;
            } else if (split[k] === "R") {
            cbottom += diff;
}
        }
        const answer = rtop * 8 + ctop;
        arr[i] = answer;
}
console.log(Math.max(...arr));

const sortarr = arr.sort((a, b) => a - b);

var mia = sortarr.reduce(function(acc, cur, ind, arr) {
    var diff = cur - arr[ind-1];
    if (diff > 1) {
      var i = 1;
      while (i < diff) {
        acc.push(arr[ind-1]+i);
        i++;
      }
    }
    return acc;
  }, []);
  
console.log(mia);