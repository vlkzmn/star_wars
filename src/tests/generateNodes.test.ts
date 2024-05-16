import { expect, it } from 'vitest';
import {
  characterTestData,
  filmTestData,
  nodesResult,
  starShipsTestData,
} from '../tests/data';
import { generateNodes } from '../lib/generateNodes';

it('should return an object of prepared nodes the same as nodesResult', () => {
  const result = generateNodes(
    characterTestData,
    filmTestData,
    starShipsTestData
  );
  expect(result).toEqual(nodesResult);
});
