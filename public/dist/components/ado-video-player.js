import { h, proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const Video = ({ source, type }) => {
  return (h("div", null,
    h("h1", null, type === 'youtube' ? 'Youtube' : 'Vimeo'),
    h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })));
};

const VideoPlayer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    if (!this.source)
      return h("h1", null, "no se paso parametro");
    return (h("div", null, this.type === 'youtube'
      ? h(Video, { source: this.source, type: this.type })
      : h(Video, { source: this.source, type: this.type })));
  }
}, [1, "ado-video-player", {
    "source": [8],
    "type": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ado-video-player"];
  components.forEach(tagName => { switch (tagName) {
    case "ado-video-player":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, VideoPlayer);
      }
      break;
  } });
}

const AdoVideoPlayer = VideoPlayer;
const defineCustomElement = defineCustomElement$1;

export { AdoVideoPlayer, defineCustomElement };
