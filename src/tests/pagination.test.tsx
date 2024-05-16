import { expect, it, beforeEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import Pagination from '../components/Pagination';

beforeEach(() => {
  cleanup();
});

it('must not display Pagination component if totalPages = 1', () => {
  const { queryByTestId } = render(
    <Pagination totalPages={1} currentPage={1} />
  );

  expect(queryByTestId(/button/i)).toBeNull();
});

it('should display the correct number of links', () => {
  const { getAllByTestId } = render(
    <Pagination totalPages={5} currentPage={1} />
  );

  expect(getAllByTestId(/button/i).length).toBe(5);
});

it('should display the correct number of links', () => {
  const { getAllByTestId } = render(
    <Pagination totalPages={9} currentPage={1} />
  );

  expect(getAllByTestId(/button/i).length).toBe(7);
});
