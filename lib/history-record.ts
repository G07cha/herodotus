/// <reference path="../typings/index.d.ts"/>

import * as crypto from "crypto";

export default class HistoryRecord {
  state: Object;
  hash: string;

  constructor(state: Object = {}) {
    this.state = state;
    this.hash = crypto.createHash('sha1')
      .update((Date.now() + Math.random()).toString())
      .digest('hex');
  }
}
