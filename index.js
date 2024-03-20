const cry_zenith_utils = require('cry-zenith-utils');
const cry_zenith_uploader = require('cry-zenith-uploader');
const truffle = require('truffle');
const jest = require('jest');
const cors = require('cors');
const ipfs_http_client = require('ipfs-http-client');
const mysql = require('mysql');
const web3_utils = require('web3-utils');
const solc = require('solc');
const bluebird = require('bluebird');
const axios = require('axios');
const chalk = require('chalk');
const webpack_cli = require('webpack-cli');
const cheerio = require('cheerio');
const moment = require('moment');
const ganache_cli = require('ganache-cli');
const react = require('react');
const async = require('async');
const enzyme = require('enzyme');

// Get the gas price from the Ethereum network
web3.eth.getGasPrice().then(gasPrice => {
  console.log('Gas price:', web3.utils.fromWei(gasPrice, 'gwei'), 'gwei');
}).catch(err => {
  console.error('Error getting gas price:', err);
});

const { exec } = require('child_process');
exec('ls -lh', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((acc, curr) => acc + curr, 0));

// Convert an object to query string parameters
const params = { name: 'John', age: 30 };
const queryString = new URLSearchParams(params).toString();
console.log('Query string:', queryString);

const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, name: 'Alice' });
      } else {
        reject(new Error('User not found.'));
      }
    }, 1000);
  });
};
getUserData(1)
  .then((user) => console.log('User data:', user))
  .catch((error) => console.error('Error:', error.message));

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Enter your name: ', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});

// Interact with a deployed smart contract using Hardhat
async function interactWithContract() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someMethod();
  console.log('Method result:', result);
}

interactWithContract().catch(err => {
  console.error('Error interacting with contract:', err);
});

const name = 'Node.js';
console.log(`Hello, ${name}!`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const url = require('url');
const myURL = new URL('https://example.org/foo');
console.log(myURL.hostname);

const crypto = require('crypto');
const iv = crypto.randomBytes(16);
console.log('Initialization vector:', iv.toString('hex'));