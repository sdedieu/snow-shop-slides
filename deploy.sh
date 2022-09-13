#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist


git init
git fetch -a -p
git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push --force git@github.com:sdedieu/snow-shop-slides.git main:gh-pages
git push -f git@github.com:sdedieu/snow-shop-shell.git main:gh-pages

cd -