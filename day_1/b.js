var fs = require("fs");
fs.readFile("input.txt", "utf-8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    var input = data;
    solution(input);
});
function solution(data) {
    var input = data.split("");
    var count = 0;
    var pos = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var x = input_1[_i];
        if (count === -1) {
            console.log("pos=", pos);
            break;
        }
        if (x === "(") {
            count++;
            pos++;
        }
        else if (x === ")") {
            count--;
            pos++;
        }
    }
}
