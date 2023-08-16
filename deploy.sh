//deploy.sh
#!/usr/bin/env sh
set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/Ray-1026/test.git master:gh-pages
cd -