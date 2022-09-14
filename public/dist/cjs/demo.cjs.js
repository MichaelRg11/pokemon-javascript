'use strict';

const index = require('./index-2d86e376.js');

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('demo.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ado-video-player_2.cjs",[[1,"ado-video-player",{"source":[8],"type":[1]}],[1,"my-card",{"name":[1],"image":[1],"role":[1],"time":[32]}]]]], options);
});
