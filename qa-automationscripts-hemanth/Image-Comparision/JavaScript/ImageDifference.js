'use strict';

const PNG = require('pngjs').PNG;
const fs = require('fs');
const gm = require('gm');
const sharp = require('sharp');
const match = require('pixelmatch');
let inputFile  = "alogo.png";
let outputFile = "output.png";
let inputFile1  = "alogo1.png";
let outputFile1 = "output1.png";

sharp(inputFile).resize({ height: 400 ,width:900}).toFile(outputFile)
    .then(function(newFileInfo) {
        console.log("Hello")
        console.log("Success")
    })
    .catch(function(err) {
        console.log("Error occured");
    });
    
sharp(inputFile1).resize({ height: 400 ,width:900}).toFile(outputFile1)
    .then(function(newFileInfo) {
        console.log("Success")
    })
    .catch(function(err) {
        console.log("Error occured");
    });
sleep(5000);

const [,, img1Path, img2Path, diffPath, threshold, includeAA] = process.argv;
const options = {};
if (threshold !== undefined) options.threshold = +threshold;
if (includeAA !== undefined) options.includeAA = includeAA !== 'false';

gm('alogo.png')
  .resizeExact(314, 160)
  .write('resize.png', function (err) {
    if (!err) console.log('done');
  });
gm('alogo.png')
.size(function (err, size) {
  if (!err)
    console.log(size.width > size.height ? 'wider' : 'taller than you');
});
const img1 = PNG.sync.read(fs.readFileSync("output.png"));
const img2 = PNG.sync.read(fs.readFileSync("output1.png"));

const {width, height} = img1;

if (img2.width !== width || img2.height !== height) {
    console.log(`Image dimensions do not match: ${width}x${height} vs ${img2.width}x${img2.height}`);
    process.exit(65);
}

const diff = diffPath ? new PNG({width, height}) : null;

console.time('matched in');
const diffs = match(img1.data, img2.data, diff ? diff.data : null, width, height, options);
console.timeEnd('matched in');

console.log(`different pixels: ${diffs}`);
console.log(`error: ${Math.round(100 * 100 * diffs / (width * height)) / 100}%`);

if (diff) {
    fs.writeFileSync(diffPath, PNG.sync.write(diff));
}
process.exit(diffs ? 66 : 0);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}