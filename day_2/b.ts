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
  ribbonLength(l, b, h);
}

let totalRibbonLength = 0;
function ribbonLength(length: any, breath: any, height: any) {
  for (let index = 0; index < length.length; index++) {
    const len = length[index];
    const bre = breath[index];
    const hei = height[index];
    const dimensions = [len, bre, hei];
    dimensions.sort((a, b) => a - b);
    const smallest1 = dimensions[0];
    const smallest2 = dimensions[1];
    let ribbon = 2 * smallest1 + 2 * smallest2;
    let ribbonBow = len * bre * hei;
    totalRibbonLength = ribbon + ribbonBow + totalRibbonLength;
  }
  console.log("LENGTH RIBBON===>", totalRibbonLength);
}
