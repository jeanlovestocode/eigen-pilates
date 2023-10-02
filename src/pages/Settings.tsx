import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import Tab1 from "./Tab1";
import { Redirect, Route } from "react-router";
import Tab2 from "./Tab2";
import { ellipseOutline, triangleOutline } from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom" color="success">
        <IonTabButton tab="tab1" href="/authenticate/settings/tab1">
          <IonIcon icon={ellipseOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/authenticate/settings/tab2">
          <IonIcon icon={triangleOutline} />
          <IonLabel>Support</IonLabel>
        </IonTabButton>
      </IonTabBar>
      <IonRouterOutlet>
        <Route path="/authenticate/settings/tab1" component={Tab1} />
        <Route path="/authenticate/settings/tab2" component={Tab2} />

        <Route exact path="/autheticate/settings">
          <Redirect to="/autheticate/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;
