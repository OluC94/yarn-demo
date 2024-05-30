const cool = require('cool-ascii-faces');

let str = ""

for (let face of cool.faces){
    str+=face;
}

console.log(str)