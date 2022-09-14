import { h } from "@stencil/core";
export class MyCard {
  constructor() {
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
  static get is() { return "my-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["./my-card.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-card.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "image": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "image",
        "reflect": false,
        "defaultValue": "''"
      },
      "role": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "role",
        "reflect": false,
        "defaultValue": "'Project Manager'"
      }
    };
  }
  static get states() {
    return {
      "time": {}
    };
  }
}
