import { expect, it } from 'vitest';
import { generatePagination } from '../lib/generatePagination';

it('should return an array of numbers from 1 to 7 if total pages = 7', () => {
  const result = generatePagination(1, 7);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

it('should return [1, 2, 3, "...", 6, 7, 8] if current = 2 and total pages = 8', () => {
  const result = generatePagination(2, 8);
  expect(result).toEqual([1, 2, 3, '...', 6, 7, 8]);
});

it('should return [1, 2, 3, 4, "...", 7, 8] if current = 3 and total pages = 8', () => {
  const result = generatePagination(3, 8);
  expect(result).toEqual([1, 2, 3, 4, '...', 7, 8]);
});

it('should return [1, 2, 3, "...", 7, 8, 9] if current = 8 and total pages = 9', () => {
  const result = generatePagination(8, 9);
  expect(result).toEqual([1, 2, 3, '...', 7, 8, 9]);
});

it('should return [1, 2, "...", 6, 7, 8, 9] if current = 7 and total pages = 9', () => {
  const result = generatePagination(7, 9);
  expect(result).toEqual([1, 2, '...', 6, 7, 8, 9]);
});

it('should return [1, "...", 4, 5, 6, "...", 9] if current = 5 and total pages = 9', () => {
  const result = generatePagination(5, 9);
  expect(result).toEqual([1, '...', 4, 5, 6, '...', 9]);
});
