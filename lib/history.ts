import HistoryRecord from "./history-record";

export default class History {
  private history: HistoryRecord[];
  private _current: HistoryRecord;

  constructor() {
    this.history = [];
  }

  save(state: Object) {
    const record = new HistoryRecord(state);

    this.history.push(record);
    this._current = record;
  }

  undo(hash: string = null) {
    if(hash) {
      const recordIndex: number = this.history.findIndex(record => record.hash === hash);

      this.history.splice(recordIndex);
      this._current = this.history[recordIndex - 1];
    }


  }

  get(hash: string) {
    return this.history.find(record => record.hash === hash);
  }

  get current(): HistoryRecord {
    return this._current;
  }
}
