#!/usr/bin/env node
let rndS = await import('../src/index.js');

rndS.rndSentenceGenerator(rndS.API,rndS.fetchSentences);