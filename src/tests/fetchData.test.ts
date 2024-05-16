import axios from 'axios';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { notFound } from 'next/navigation';
import {
  getFirstPage,
  getCharacters,
  getCharacter,
  getHomeWorld,
  getFilms,
  getStarShips,
} from '../lib/fetchData';
import {
  characterTestData,
  filmTestData,
  filmsTestDataResponse,
  firstPageTestDataResponse,
  planetTestData,
  starshipsTestDataResponse,
} from './data';

vi.mock('axios');
vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

describe('Fetching data', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Get first page function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: firstPageTestDataResponse,
      });

      const users = await getFirstPage();

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/people/'
      );
      expect(users).toEqual(firstPageTestDataResponse);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getFirstPage()).rejects.toThrow('Failed to fetch data.');
    });

    test('makes a redirects to not-found page on 404 error', async () => {
      const error = { response: { status: 404 } };

      axios.get = vi.fn().mockRejectedValue(error);

      try {
        await getFirstPage();
      } catch (error) {
        expect(notFound).not.toHaveBeenCalled();
      }
    });
  });

  describe('Get characters function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: firstPageTestDataResponse,
      });

      const users = await getCharacters(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/people/?page=1'
      );
      expect(users).toEqual(firstPageTestDataResponse.results);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getCharacters(1)).rejects.toThrow('Failed to fetch data.');
    });

    test('makes a redirects to not-found page on 404 error', async () => {
      const error = { response: { status: 404 } };

      axios.get = vi.fn().mockRejectedValue(error);

      try {
        await getCharacters(1);
      } catch (error) {
        expect(notFound).toHaveBeenCalled();
      }
    });
  });

  describe('Get character function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: characterTestData,
      });

      const users = await getCharacter('19');

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/people/19/'
      );
      expect(users).toEqual(characterTestData);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getCharacter('19')).rejects.toThrow('Failed to fetch data.');
    });

    test('makes a redirects to not-found page on 404 error', async () => {
      const error = { response: { status: 404 } };

      axios.get = vi.fn().mockRejectedValue(error);

      try {
        await getCharacter('19');
      } catch (error) {
        expect(notFound).toHaveBeenCalled();
      }
    });
  });

  describe('Get home world name function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: planetTestData,
      });

      const users = await getHomeWorld(1);

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/planets/1/'
      );
      expect(users).toEqual(planetTestData.name);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getHomeWorld(1)).rejects.toThrow('Failed to fetch data.');
    });
  });

  describe('Get films list function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: filmsTestDataResponse,
      });

      const films = await getFilms([1]);

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/films/'
      );
      expect(films).toEqual(filmTestData);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getFilms([1])).rejects.toThrow('Failed to fetch data.');
    });
  });
  
  describe('Get starships function', () => {
    test('makes a successfully fetches data from the API', async () => {
      axios.get = vi.fn().mockResolvedValue({
        data: starshipsTestDataResponse,
      });

      const starships = await getStarShips([9]);

      expect(axios.get).toHaveBeenCalledWith(
        'https://sw-api.starnavi.io/starships/9/'
      );
      expect(starships).toEqual([starshipsTestDataResponse]);
    });

    test('makes a throws an error if the request fails', async () => {
      const error = { response: { status: 500 } };

      axios.get = vi.fn().mockRejectedValue(error);
      await expect(getStarShips([9])).rejects.toThrow('Failed to fetch data.');
    });
  });
});
