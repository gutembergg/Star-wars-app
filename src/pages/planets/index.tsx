import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { AxiosResponse } from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FilmContext } from "../../components/context/FilmDetail";
import api from "../../services/api";

const Planets: React.FC = () => {
  const { data } = useContext(FilmContext);
  const [planetsId, setPlanetsId] = useState<string[]>([]);
  const [dataPlanets, setDataPlanets] = useState<AxiosResponse<any>[]>([]);

  const getIdOfPlanet = useCallback((url) => {
    const urlSplited = url.split("/");
    const filmId = urlSplited[urlSplited.length - 2];
    setPlanetsId((prev) => [...prev, filmId]);

    return filmId;
  }, []);

  const getPlanets = useCallback(() => {
    data.planets?.map((item) => {
      const id = getIdOfPlanet(item);
      return id;
    });
  }, [data.planets, getIdOfPlanet]);

  const getDataPlanets = useCallback(() => {
    planetsId.map(async (item) => {
      const response = await api.get(`/planets/${item}`);
      setDataPlanets((prev) => [...prev, response.data]);
    });
  }, [planetsId]);

  useEffect(() => {
    getDataPlanets();
  }, [getDataPlanets]);

  console.log("dataPlanets", dataPlanets);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Planets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>{data.title}</div>

        <IonButtons onClick={getPlanets}>planets</IonButtons>
      </IonContent>
    </IonPage>
  );
};

export default Planets;
