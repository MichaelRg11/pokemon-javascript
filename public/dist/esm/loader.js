import { p as promiseResolve, b as bootstrapLazy } from './index-a6011c55.js';

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ado-video-player_2",[[1,"ado-video-player",{"source":[8],"type":[1]}],[1,"my-card",{"name":[1],"image":[1],"role":[1],"time":[32]}]]]], options);
  });
};

export { defineCustomElements };
