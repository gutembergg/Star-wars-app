import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { FilmContext } from "../../components/context/FilmDetail";
import IPlanets from "../../interfaces/Iplanets";
import api from "../../services/api";

const Planets: React.FC = () => {
  const { data } = useContext(FilmContext);
  const [dataPlanets, setDataPlanets] = useState<Partial<IPlanets[]> | any[]>(
    [] as Partial<IPlanets[]>
  );

  const getIdOfPlanet = useCallback((url) => {
    const urlSplited = url.split("/");
    const filmId = urlSplited[urlSplited.length - 2];

    return filmId;
  }, []);

  const getDataPlanets = useCallback((array: string[]) => {
    array.map(async (item) => {
      const response = await api.get(`/planets/${item}`);
      setDataPlanets((prev) => [...prev, response.data]);
    });
  }, []);

  console.log("data:", data);

  const getPlanets = useCallback(() => {
    data.planets?.map((item) => {
      const id = getIdOfPlanet(item);

      const planetsId = [];

      planetsId.push(id);

      getDataPlanets(planetsId);
      return id;
    });
  }, [data.planets, getIdOfPlanet, getDataPlanets]);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

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

      {dataPlanets.length !== 0 ? (
        <IonContent>
          <div>{data.title}</div>
          <IonCard>
            {dataPlanets.map((item) => (
              <IonCardContent key={item.name}>{item.name}</IonCardContent>
            ))}
          </IonCard>
        </IonContent>
      ) : (
        <IonContent>
          <div>All Planets</div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Planets;
