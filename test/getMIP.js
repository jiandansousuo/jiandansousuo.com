/**
 * @file get MIP data
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const public = path.resolve(__dirname, '../mip_public/');

module.exports = () => {
  if (!fs.existsSync(public)) {
    console.error(`\`${public}\` is not a directory!`);
    process.exit(1);
  }

  return glob.sync('**/!(baidu_*).html', {
    cwd: public
  }).map(uri => {
    return {
      path: uri,
      html: fs.readFileSync(path.resolve(public, uri)).toString()
    };
  });
};
