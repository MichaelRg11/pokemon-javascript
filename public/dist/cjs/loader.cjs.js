'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d86e376.js');

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ado-video-player_2.cjs",[[1,"ado-video-player",{"source":[8],"type":[1]}],[1,"my-card",{"name":[1],"image":[1],"role":[1],"time":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
