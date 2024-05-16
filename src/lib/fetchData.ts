import axios, { AxiosError } from 'axios';
import { Films } from '@/types/Film';
import { StarShip } from '@/types/StarShip';
import { notFound } from 'next/navigation';

// Base URL for the Star Wars API
const BASE_URL = 'https://sw-api.starnavi.io';

// Regular expression to match URLs containing 'people'
const regex = /people\/[^/]+/;

// Fetches data from the Star Wars API.
async function fetchData(url: string) {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`);

    return response.data;
  } catch (error: any) {
    if (regex.test(url) && error.response?.status === 404) {
      // redirect to not-found page if response status 404 and
      // if rerquest from getFirstPage, getCharacters or getCharacter functions
      notFound();
    } else {
      // Throw an error if fetching data fails
      throw new Error('Failed to fetch data.');
    }
  }
}

// Fetches the first page of characters from the Star Wars API.
export const getFirstPage = async () => {
  const responseData = await fetchData('people/');

  return responseData;
};

// Fetches characters from a specific page of the Star Wars API.
export const getCharacters = async (page: number) => {
  const responseData = await fetchData(`people/?page=${page}`);

  return responseData.results;
};

// Fetches a specific character from the Star Wars API.
export const getCharacter = async (id: string) => {
  const responseData = await fetchData(`people/${id}/`);

  return responseData;
};

// Fetches the home world of a character from the Star Wars API.
export const getHomeWorld = async (id: number) => {
  const responseData = await fetchData(`planets/${id}/`);

  return responseData.name;
};

// Fetches information about films of a character from the Star Wars API.
export const getFilms = async (filmsList: number[]) => {
  const responseData: Films = await fetchData('films/');
  const filteredFilms = responseData.results.filter((item) =>
    filmsList.includes(item.id)
  );

  return filteredFilms;
};

// Fetches information about starships of a character from the Star Wars API.
export const getStarShips = async (starShipsList: number[]) => {
  const starShips: StarShip[] = [];

  for (const ship of starShipsList) {
    const responseData = await fetchData(`starships/${ship}/`);
    starShips.push(responseData);
  }

  return starShips;
};
