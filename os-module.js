const os = require('os');

// Info about current user

console.log(os.userInfo())

// get uptime of the system

console.log(os.uptime())

console.log(os.type());
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.platform())
console.log(os.release())