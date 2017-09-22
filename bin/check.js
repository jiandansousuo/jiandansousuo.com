/**
 * @file Check service availability
 * @author xuexb <fe.xiaowu@gmail.com>
 */

const path = require('path');
const fs = require('fs');
const jsonPath = path.resolve(__dirname, '../public/content.json');

let isError = false;

const exit = (str, isExit) => {
  isError = true;
  console.error(str);

  if (isExit) {
    process.exit(1);
  }
};

if (!fs.existsSync(jsonPath)) {
  exit(`\`${jsonPath}\` is not a file!`, true);
}

let data;

try {
  data = require(jsonPath);
}
catch (e) {
  exit(e);
}

// check common config
if (!data.meta) {
  exit('`config.meta` can not be empty!');
}
else {
  [
    'title',
    'subtitle',
    'description',
    'author',
    'url'
  ].forEach(key => {
    if (!data.meta[key]) {
      exit(`\`config.${key}\` can not be empty!`);
    }
  });
}


[
  'title',
  'desc',
  'author',
  {
    key: 'excerpt',
    tip: '<!--more-->'
  }
].forEach(val => {
  if ('string' === typeof val) {
    val = {
      key: val
    };
  }

  data.posts.forEach(post => {
    if (!post[val.key]) {
      let tip = val.tip || `\`post.${val.key}\``;
      exit(`${tip} in the \`${post.path}\` must be set!`);
    }
  });
});


if (isError) {
  process.exit(1);
}
