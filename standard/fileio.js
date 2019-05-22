var fs = require('fs');

// fs.writeFileSync('./files/myfile.txt', 'The Text File.....');
// console.log('File Written Successfully..');

// var fileData = fs.readFileSync('./files/myfile.txt');
// console.log('data is ' + fileData.toString());
console.log('Code to Write File');
fs.writeFile('./files/myasyncfile.txt', 'The Async File Data', function (err) {
    // check for error 
    if (err) {
        console.log('Error in file write ' + err.message);
        return;
    }
    console.log('Success');
});
console.log('File is Written');


fs.readFile('./files/myasyncfile.txt', function (err, data) {
    if (err) {
        console.log('Error in file read ' + err.message);
        return;
    }
    console.log('data is ' + data.toString());
});
console.log('File is read');