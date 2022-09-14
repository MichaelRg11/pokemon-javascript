import type { Components, JSX } from "../types/components";

interface AdoVideoPlayer extends Components.AdoVideoPlayer, HTMLElement {}
export const AdoVideoPlayer: {
  prototype: AdoVideoPlayer;
  new (): AdoVideoPlayer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
