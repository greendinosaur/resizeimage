const sharp = require("sharp");

async function getMetadata() {
  try {
    const metadata = await sharp(
      "img/FILENAME"
    ).metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occured while procesing: ${error}`);
  }
}

getMetadata();
