const assert = require('power-assert');
import HistoryRecord from "../lib/history-record";

describe('History record', function() {
  it('should have constructor', function() {
    assert.ok(HistoryRecord.constructor);
    let out = new HistoryRecord();
    assert.ok(out);
  });

  it('should pass state without modifications', function() {
    let out = new HistoryRecord({});
    assert.deepEqual(out.state, {});
    out = new HistoryRecord({foo: 'bar'});
    assert.deepEqual(out.state, {foo: 'bar'});
  });

  it('should return hash as random string', function() {
    let out = new HistoryRecord();
    assert.equal(typeof out.hash, 'string');
    assert.ok(out.hash.length > 5); // Seems legit :D
  });
});
