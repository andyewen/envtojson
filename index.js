#!/usr/bin/env node
const fs = require('fs');
const dotenv = require('dotenv')

process.stdin.setEncoding('utf-8');
let inputString = '';
process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
      inputString += chunk;
  }
});

process.stdin.on('end', () => {
    const parsedFile = dotenv.parse(inputString);
    process.stdout.write(JSON.stringify(parsedFile, null, 4));
    process.stdout.write('\n');
});
