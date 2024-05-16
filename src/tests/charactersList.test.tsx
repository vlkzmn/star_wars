import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import СharactersList from '../components/СharactersList';
import { firstPageTestDataResponse } from './data';

async function resolvedComponent(Component: any, props: any) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

it('should render СharactersList with the correct number of character cards for the first page', async () => {
  const CompResolved = await resolvedComponent(СharactersList, {
    currentPage: 1,
    firstList: firstPageTestDataResponse.results,
  });
  const { getAllByRole } = render(<CompResolved />);

  expect(getAllByRole('card').length).toBe(10);
});
