import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const myCardCss = ".tarjeta{display:flex;flex-direction:column;justify-content:space-between;width:420px;border:1px solid lightgray;box-shadow:2px 2px 8px 4px #d3d3d3d1;border-radius:15px;font-family:sans-serif}.img{width:200px;object-fit:contain}.titulo{font-size:24px;padding:10px 10px 0 10px;margin:auto}.cuerpo{padding:10px;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px}.pie{background:#6699ff;border-radius:0 0 15px 15px;padding:10px;text-align:center}.pie a{text-decoration:none;color:white}.pie a:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}";

const MyCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return myCardCss; }
}, [1, "my-card", {
    "name": [1],
    "image": [1],
    "role": [1],
    "time": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-card"];
  components.forEach(tagName => { switch (tagName) {
    case "my-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyCard$1);
      }
      break;
  } });
}

const MyCard = MyCard$1;
const defineCustomElement = defineCustomElement$1;

export { MyCard, defineCustomElement };
