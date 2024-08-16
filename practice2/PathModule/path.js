// console.log(__filename);
// console.log(__dirname);
const path= require('path');
//  console.log(path);
console.log(path.join(__dirname,"./path.js"));
console.log(path.relative("./path.js","./osModule.js"));

