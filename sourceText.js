var r='Recorder';
var l='location';
var d='date';

var s, t;

if (l || d) {
    if (l && d) {
        s = `${l}, ${d}`;
    } else {
        s = l || d;
    }
}
console.log("source partial \n");
console.log(s);

if (r) {
    if (s != undefined) {
        t = `${r} - ${s}`;
    } else {
        t = r;
    }
} else {
    t = s;
}

console.log("\n source Text \n");
console.log(t);