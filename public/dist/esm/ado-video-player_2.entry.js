import { h, r as registerInstance } from './index-a6011c55.js';

const Video = ({ source, type }) => {
  return (h("div", null,
    h("h1", null, type === 'youtube' ? 'Youtube' : 'Vimeo'),
    h("iframe", { width: "560", height: "315", src: source, title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })));
};

const VideoPlayer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    if (!this.source)
      return h("h1", null, "no se paso parametro");
    return (h("div", null, this.type === 'youtube'
      ? h(Video, { source: this.source, type: this.type })
      : h(Video, { source: this.source, type: this.type })));
  }
};

const myCardCss = ".tarjeta{display:flex;flex-direction:column;justify-content:space-between;width:420px;border:1px solid lightgray;box-shadow:2px 2px 8px 4px #d3d3d3d1;border-radius:15px;font-family:sans-serif}.img{width:200px;object-fit:contain}.titulo{font-size:24px;padding:10px 10px 0 10px;margin:auto}.cuerpo{padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px}.pie{background:#6699ff;border-radius:0 0 15px 15px;padding:10px;text-align:center}.pie a{text-decoration:none;color:white}.pie a:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}";

const MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "tarjeta" }, h("div", { class: "titulo" }, this.name), h("div", { class: "cuerpo" }, h("img", { class: 'img', src: this.image, alt: "muestra" })), h("div", { class: "pie" }, h("a", { href: "#" }, this.role, " ", time))));
  }
};
MyCard.style = myCardCss;

export { VideoPlayer as ado_video_player, MyCard as my_card };
