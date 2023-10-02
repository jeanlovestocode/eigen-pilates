import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { personOutline, trashBinOutline } from "ionicons/icons";
import React, { Profiler } from "react";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonIcon icon={personOutline} slot="end"> </IonIcon>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">My Profile</IonContent>
      
    </IonPage>
  );
};

export default Tab1;
