// const {spawn} = require('child_process')
// const path = require('path')


// const pyPath = path.join(__dirname,'python','index.py')

// const result = spawn('python',['-u',pyPath,{name: "hassan"}])

// let mydata = {}

// result.stdout.on('data', (data) => {
//   mydata = data
//   console.log(mydata.toString())
// });


var rn_bridge = require('rn-bridge');


rn_bridge.channel.on('message', (msg) => {
  rn_bridge.channel.send(msg+" & It works");
  } 
);

rn_bridge.channel.send("Node was initialized.");