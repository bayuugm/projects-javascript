import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function test', (t) => {
  assert.strictEqual(sum(2, 3), 5);
});
