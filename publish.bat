cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/wdc-molfar/msapi-schemas.git master:gh-pages
cd ..
