#!/usr/bin/env node
'use strict';

require('tsx');
const path = require('path');

require(path.resolve(__dirname, '..', 'scripts', 'build-all.ts'));
