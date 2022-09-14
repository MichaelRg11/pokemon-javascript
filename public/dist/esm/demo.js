import { p as promiseResolve, b as bootstrapLazy } from './index-a6011c55.js';

/*
 Stencil Client Patch Browser v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ado-video-player_2",[[1,"ado-video-player",{"source":[8],"type":[1]}],[1,"my-card",{"name":[1],"image":[1],"role":[1],"time":[32]}]]]], options);
});
