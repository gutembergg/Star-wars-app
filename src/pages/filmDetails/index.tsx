import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FilmContext } from "../../components/context/FilmDetail";

const FilmDetails: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { getFilmById, data } = useContext(FilmContext);

  useEffect(() => {
    getFilmById(id);
  }, [getFilmById, id]);

  const navigate = useCallback(
    (path: string) => {
      history.push(path);
    },
    [history]
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Film: {data.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{data.opening_crawl}</IonContent>
      <IonButton color="secondary" onClick={() => navigate("/planets")}>
        Planets
      </IonButton>
      <IonButton color="secondary" onClick={() => navigate("/people")}>
        People
      </IonButton>
    </IonPage>
  );
};

export default FilmDetails;
