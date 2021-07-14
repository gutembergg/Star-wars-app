import React, { createContext, useCallback, useState } from "react";
import ApiFilmDetail from "../../interfaces/ApiFilmDetail";
import api from "../../services/api";

interface IFilmsContextState {
  data: Partial<ApiFilmDetail>;
  getFilmById(id: string): void;
}

export const FilmContext = createContext<IFilmsContextState>(
  {} as IFilmsContextState
);

const FilmDetailProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Partial<ApiFilmDetail>>({});

  const getFilmById = useCallback(async (id: string) => {
    const response = await api.get(`/films/${id}`);

    setData(response.data);
  }, []);

  return (
    <FilmContext.Provider value={{ data, getFilmById }}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmDetailProvider;
