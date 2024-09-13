import { test } from 'node:test';
import { strictEqual } from 'node:assert';
import { elapsedTimeParser } from './elapsed-time-parser.js';

test('compute string of hours and minutes correctly', () => {
  const elapsedTime = elapsedTimeParser('42m1h7m12h5m51m26m46m51m33m4h4m2h30m');
  const expectedElapsedTime = '23h55m';
  strictEqual(elapsedTime, expectedElapsedTime);
});
