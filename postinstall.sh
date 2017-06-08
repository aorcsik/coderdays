#!/bin/sh

if [ ! -d "content/themes/casper/.git" ]; then
    ncp node_modules/Casper content/themes/casper
fi

ncp node_modules/prismjs/prism.js public/prism.js
ncp node_modules/prismjs/themes/prism.css public/prism.css
