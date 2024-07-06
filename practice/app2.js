
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('please enter your name ',(name)=>{
    console.log('you entered you name as: '+name);
    rl.close();
});

rl.on('close',()=>{
    console.log('The interface has been closed.');
    process.exit(0);
})