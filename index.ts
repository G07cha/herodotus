import History from "./lib/history";
import * as util from "util";

export default function Herodotus(obj: Object = {}, options: Object = {}) {
  const history: History = new History();
  const props: PropertyDescriptorMap = {};

  Object.keys(history).forEach((key) => props[key] = {
    enumerable: false
  });

  Object.defineProperties(history, props);
  Object.defineProperty(history, '_current', {
    enumerable: false,
    writable: true
  })

  obj = Object.assign(history, obj);

  return obj;
}
