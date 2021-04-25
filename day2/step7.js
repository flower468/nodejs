let os = require("os");
console.log(os.arch());
console.log("++++++++++++++++");
console.log(os.cpus().length);
console.log("++++++++++++++++");
console.log(os.cpus()[0]);
console.log("++++++++++++++++");
console.log("Total Memory : "+os.totalmem() +" | Free Memory : "+os.freemem());