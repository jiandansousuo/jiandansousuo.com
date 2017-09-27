#!/bin/sh

dir=$(cd `dirname $0` && cd .. && pwd)

echo 'build MIP start!'

cd $dir;
if [ -d themes/mip_apollo ];then
  cd themes/mip_apollo
  git pull
  cd ../../
else
  git clone https://github.com/jiandansousuo/hexo-theme-mip-apollo.git themes/mip_apollo
fi

npm install --save-dev hexo-generator-mip
./node_modules/.bin/hexo --config mip.yml generate
npm uninstall --save-dev hexo-generator-mip

echo 'build MIP end!'
