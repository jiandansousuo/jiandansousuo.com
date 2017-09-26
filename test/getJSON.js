/**
 * @file get content.json
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const path = require('path');
const fs = require('fs');
const jsonPath = path.resolve(__dirname, '../public/content.json');

module.exports = () => {
  if (!fs.existsSync(jsonPath)) {
    console.error(`\`${jsonPath}\` is not a file!`);
    process.exit(1);
  }

  let data;

  try {
    data = require(jsonPath);
  }
  catch (e) {
    console.error(e);
    process.exit(1);
  }

  return data;
};
