import test from 'node:test';
import assert from 'node:assert';
import { normalize } from '../src/index.js';

test.describe('Normalize function', () => {
  test('String inputs', () => {
    assert.strictEqual(normalize(''), '');
    assert.strictEqual(normalize('     '), '');
    assert.strictEqual(normalize('Čau'), 'cau');
    assert.strictEqual(normalize('ÁÉÍÓÚÝáéíóúý'), 'aeiouyaeiouy');
    assert.strictEqual(normalize('Hello   World'), 'hello world');
    assert.strictEqual(normalize('  Multiple    Spaces  '), 'multiple spaces');
  });

  test('Non-string inputs', () => {
    assert.strictEqual(normalize(), '');
    assert.strictEqual(normalize(null), '');
    assert.strictEqual(normalize(undefined), '');
    assert.strictEqual(normalize(123), '123');
    assert.strictEqual(normalize(true), 'true');
    assert.strictEqual(normalize(false), 'false');
    // Objects are stringified via native String() → "[object Object]" → lowercased
    assert.strictEqual(normalize({}), '[object object]');
    assert.strictEqual(normalize([]), '');
    assert.strictEqual(normalize([1, 2, 3]), '1,2,3');
  });
});
