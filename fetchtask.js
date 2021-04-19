const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const dir = './result';

   // fetching the data from placeholder
let url = "https://jsonplaceholder.typicode.com/posts";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
       // creating directory "result"
fs.mkdir(dir,(err)=> {
  if(err){
    throw err;
  }
  console.log("Directory is created.");
});
       // writing to the file posts.json  
fs.writeFile('./result/posts.json',JSON.stringify(json,null,2), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(json) > 'posts.json');

});
    });