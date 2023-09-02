const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err: any, data: any) => {
  if (err) {
    console.error(err);
    return;
  }
  const input = data;
  formatInput(input.toString());
});

const l = [];
const b = [];
const h = [];
function formatInput(data: any) {
  const lines = data.trim().split("\n");
  lines.forEach((line) => {
    const dimension = line.split("x");
    if (dimension.length === 3) {
      l.push(parseInt(dimension[0], 10));
      b.push(parseInt(dimension[1], 10));
      h.push(parseInt(dimension[2], 10));
    }
  });
  presentArea(l, b, h);
}

let totalArea = 0;
function presentArea(length: any, breath: any, height: any) {
  for (let index = 0; index < length.length; index++) {
    const lb = length[index] * breath[index];
    const lh = length[index] * height[index];
    const bh = breath[index] * height[index];
    let smallest;

    if (lb <= lh && lb <= bh) {
      smallest = lb;
    } else if (lh <= lb && lh <= bh) {
      smallest = lh;
    } else {
      smallest = bh;
    }
    totalArea = 2 * lb + 2 * lh + 2 * bh + totalArea;
    totalArea = totalArea + smallest;
  }
  console.log("Total Area required===>", totalArea);
}
