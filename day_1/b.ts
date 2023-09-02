const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err: any, data: any) => {
  if (err) {
    console.error(err);
    return;
  }
  const input = data;
  solution(input);
});

function solution(data: string) {
  const input = data.split("");
  var count = 0;
  var pos = 0;
  for (const x of input) {
    if (count === -1) {
      console.log("pos=", pos);
      break;
    }
    if (x === "(") {
      count++;
      pos++;
    } else if (x === ")") {
      count--;
      pos++;
    }
  }
}
