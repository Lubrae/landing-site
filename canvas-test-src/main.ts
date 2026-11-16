
import { mount } from "ascii.rest";
import * as dragonfly from "../dragonfly";

const canvas = document.querySelector<HTMLCanvasElement>(
  "#ascii-dragonfly"
);

if (canvas) {
  mount(canvas, dragonfly);
}
