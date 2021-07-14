import React, { useCallback, useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ApiFilms from "../../interfaces/ApiFilms";
import api from "../../services/api";
import FilmItem from "../../components/FilmItem";

import { ListFilms } from "./styles";

const Films: React.FC = () => {
  const [films, setFilms] = useState<Partial<ApiFilms>>({} as ApiFilms);

  const filmsData = useCallback(async () => {
    const response = await api.get("/films");

    setFilms(response.data);
  }, []);

  useEffect(() => {
    filmsData();
  }, [filmsData]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Films</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListFilms>
          {films.results?.map((item) => (
            <FilmItem key={item.title} title={item.title} url={item.url} />
          ))}
        </ListFilms>
      </IonContent>
    </IonPage>
  );
};

export default Films;
