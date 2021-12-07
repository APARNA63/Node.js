// const Picture = "A beautiful flower"
// console.log(Picture)
const fs = require('fs')
// import {readFilesync} from 'fs';
const inputTxt = fs.readFileSync('./info.txt','utf-8')
console.log(inputTxt +' . '+'A TRAINEE IN CGCS BOOTCAMP' )