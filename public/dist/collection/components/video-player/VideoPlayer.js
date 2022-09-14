import { h } from "@stencil/core";
import { Video } from "./functional-components/video";
export class VideoPlayer {
  render() {
    if (!this.source)
      return h("h1", null, "no se paso parametro");
    return (h("div", null, this.type === 'youtube'
      ? h(Video, { source: this.source, type: this.type })
      : h(Video, { source: this.source, type: this.type })));
  }
  static get is() { return "ado-video-player"; }
  static get encapsulation() { return "shadow"; }
  static get properties() {
    return {
      "source": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "source",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'youtube'",
          "resolved": "\"youtube\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
}
