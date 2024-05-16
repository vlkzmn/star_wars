export interface Film {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  starships: number[];
}

export interface Films {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}
