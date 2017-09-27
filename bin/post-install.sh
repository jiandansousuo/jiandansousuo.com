#!/bin/sh
rm -rf themes
git clone https://github.com/jiandansousuo/hexo-theme-apollo.git themes/apollo
rm -rf themes/apollo/.git

git clone https://github.com/jiandansousuo/hexo-theme-mip-apollo.git themes/mip_apollo
rm -rf themes/mip_apollo/.git
