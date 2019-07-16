const request = require('request');
const fs = require('fs');

var url = 'https://sytantris.github.io/http-examples/future.jpg';

request (url)
  .on('error', err => {
    throw err;
  })
  .on('response', response => {
    console.log('Downloading image...');
    console.log('response message', response.statusMessage);
    console.log('response content type', response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', () => console.log('Download complete.'));
