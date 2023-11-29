#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
#git status
#git checkout master

git checkout -b master

git remote add origin git@106.14.9.166:/home/www/website/ts.git

# 如果发布到 https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:yourbusiness/marcus-tes.git main
git push -f git@106.14.9.166:/home/www/website/ts.git master

cd -
