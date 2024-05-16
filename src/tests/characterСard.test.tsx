import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import СharacterСard from '../components/СharacterСard';
import { characterTestData } from './data';

it('should render CharacterCard with the correct character name and image', () => {
  const { getByText, getByAltText } = render(
    <СharacterСard character={characterTestData} />
  );

  expect(getByText(/Jek Tono Porkins/i)).toBeInTheDocument();
  expect(getByAltText(/Jek Tono Porkins/i)).toBeInTheDocument();
});
