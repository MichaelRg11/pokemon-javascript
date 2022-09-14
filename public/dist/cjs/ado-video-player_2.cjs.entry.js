'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2d86e376.js');

const Video = ({ source, type }) => {
  return (index.h("div", null,
    index.h("h1", null, type === 'youtube' ? 'Youtube' : 'Vimeo'),
    index.h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })));
};

const VideoPlayer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    if (!this.source)
      return index.h("h1", null, "no se paso parametro");
    return (index.h("div", null, this.type === 'youtube'
      ? index.h(Video, { source: this.source, type: this.type })
      : index.h(Video, { source: this.source, type: this.type })));
  }
};

const myCardCss = ".tarjeta{display:flex;flex-direction:column;justify-content:space-between;width:420px;border:1px solid lightgray;box-shadow:2px 2px 8px 4px #d3d3d3d1;border-radius:15px;font-family:sans-serif}.img{width:200px;object-fit:contain}.titulo{font-size:24px;padding:10px 10px 0 10px;margin:auto}.cuerpo{padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px}.pie{background:#6699ff;border-radius:0 0 15px 15px;padding:10px;text-align:center}.pie a{text-decoration:none;color:white}.pie a:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}";

const MyCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = '';
    this.image = '';
    this.role = 'Project Manager';
    this.time = Date.now();
  }
  connectedCallback() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }
  disconnectedCallback() {
    window.clearInterval(this.timer);
  }
  render() {
    const time = new Date(this.time).toLocaleTimeString();
    return (index.h("div", { class: "tarjeta" }, index.h("div", { class: "titulo" }, this.name), index.h("div", { class: "cuerpo" }, index.h("img", { class: 'img', src: this.image, alt: "muestra" })), index.h("div", { class: "pie" }, index.h("a", { href: "#" }, this.role, " ", time))));
  }
};
MyCard.style = myCardCss;

exports.ado_video_player = VideoPlayer;
exports.my_card = MyCard;
