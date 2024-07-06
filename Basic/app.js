// how to output something into the terminal and to read input fron the terminal
const readLine= require('readline'); //This line imports the readline module, which provides an interface for reading data from a Readable stream (like process.stdin).

const rl= readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});                     //This creates a readline interface, where input is set to process.stdin (standard input, usually the terminal) and output is set to process.stdout (standard output, usually the terminal).

rl.question('please enter your name:',(name)=>{
    console.log('you entered ' +name);
    rl.close();
})//The rl.question method displays a question to the user ('please enter your name:'). When the user provides input and presses Enter, the provided callback function is executed. The user's input is passed as the name parameter to the callback function, which then logs the input to the console. Finally, rl.close() is called to close the readline interface.




rl.on('close',()=>{
    console.log('interface closed');
    process.exit(0);
})      //This adds an event listener for the close event of the readline interface. When the interface is closed (which happens when rl.close() is called), the callback function logs 'interface closed' to the console and then calls process.exit(0) to exit the process cleanly with a status code of 0 (which typically means that the process exited successfully).