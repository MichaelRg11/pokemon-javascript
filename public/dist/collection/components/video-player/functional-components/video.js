import { h } from "@stencil/core";
export const Video = ({ source, type }) => {
  return (h("div", null, h("h1", null, type === 'youtube' ? 'Youtube' : 'Vimeo'), h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })));
};
