import {
  IonApp,
  IonContent,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { filmOutline, planet, people } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Films from "./pages/films";
import Planets from "./pages/planets";
import People from "./pages/people";
import FilmDetails from "./pages/filmDetails";

import { setupConfig } from "@ionic/react";
import FilmDetailProvider from "./components/context/FilmDetail";

setupConfig({
  mode: "ios",
  animated: true,
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet animated={true} animation={setupConfig}>
            <FilmDetailProvider>
              <Route path="/films" exact component={Films} />
              <Route path="/planets" exact component={Planets} />
              <Route path="/people" exact component={People} />
              <Route path="/film/:id" exact component={FilmDetails} />
              <Route exact path="/" render={() => <Redirect to="/films" />} />
            </FilmDetailProvider>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="films" href="/films">
              <IonIcon icon={filmOutline} />
              <IonLabel>Films</IonLabel>
            </IonTabButton>
            <IonTabButton tab="people" href="/people">
              <IonIcon icon={people} />
              <IonLabel>Peoples</IonLabel>
            </IonTabButton>
            <IonTabButton tab="planets" href="/planets">
              <IonIcon icon={planet} />
              <IonLabel>Planets</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
