const sharp = require("sharp");
const fs = require("fs");
const directory = "./img";

async function resizeImage(filename, width) {
  try {
    console.log(filename, width, filename.lastIndexOf("."));
    const baseFilename = filename.substring(0, filename.lastIndexOf("."));
    await sharp(`${directory}/${filename}`)
      .resize({
        width: width,
      })
      .toFormat("webp")
      .toFile(`${directory}/${baseFilename}-${width}.webp`);
  } catch (error) {
    console.log(error);
  }
}

async function convertImage(filename) {
  try {
    console.log(filename, filename.lastIndexOf("."));
    const baseFilename = filename.substring(0, filename.lastIndexOf("."));
    await sharp(`${filename}`).toFormat("webp").toFile(`${baseFilename}.webp`);
  } catch (error) {
    console.log(error);
  }
}
//write a function that given a file, generates multiple files of different sizes
//say 400, 800, 1200,
async function multipleSizes(filename) {
  const sizes = [400, 800, 1200];

  sizes.forEach((size) => {
    resizeImage(filename, size);
  });
}

//write a function that iterates through all files in a directory and resizes each to different sizes
//const directory = './images';

async function convertAllFiles() {
  fs.readdirSync(directory).forEach((file) => {
    multipleSizes(file);
  });
}

//make sure file is in an img folder in the root folder
resizeImage("SOMEFILE.jpeg", 1200);

//multipleSizes("./img/SOMEFILE.jpg");
//convertAllFiles();
//convertImage("./img/SOMEFILE.jpeg");
