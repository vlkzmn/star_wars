import { expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { characterTestData, filmTestData, starShipsTestData } from './data';
import CharacterData from '../components/CharacterData';

it('should render CharacterData with character information, films, starships, and home world correctly', () => {
  const { getByText } = render(
    <CharacterData
      character={characterTestData}
      films={filmTestData}
      ships={starShipsTestData}
      homeWorld={'Bestine IV'}
    />
  );

  expect(getByText(/Jek Tono Porkins/i)).toBeInTheDocument();
  expect(getByText(/Home World: Bestine IV/i)).toBeInTheDocument();
  expect(getByText(/A New Hope/i)).toBeInTheDocument();
  expect(getByText(/X-wing/i)).toBeInTheDocument();
});
