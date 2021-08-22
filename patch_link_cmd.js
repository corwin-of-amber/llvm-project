#!/usr/bin/env node

const fs = require('fs');

var FILES  = ['./tools/llc/CMakeFiles/llc.dir/link.txt'];


function processFile(filename) {

    fs.writeFileSync(filename, fs.readFileSync(filename, 'utf-8')
        .replace(/-Wl,-rpath[^ ]+/, ''));
}


for (let fn of FILES) processFile(fn);
