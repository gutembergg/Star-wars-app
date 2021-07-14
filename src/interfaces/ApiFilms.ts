import ApiFilmDetail from "./ApiFilmDetail";

export default interface ApiFilms {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiFilmDetail[];
}
