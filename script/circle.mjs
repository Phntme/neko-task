import { element } from "./element.mjs";

// keliling lingkaran 3.14 * 2 * 40
const kelilingLingkaran = 251;

let xpNow = 20;
let xpMax = 125;

let persentase = xpNow / xpMax;

export let offset = kelilingLingkaran - persentase * kelilingLingkaran;
