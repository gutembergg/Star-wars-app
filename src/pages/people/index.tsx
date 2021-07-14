import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const People: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Peoples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>People!!!!!!!</div>
      </IonContent>
    </IonPage>
  );
};

export default People;
