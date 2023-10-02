import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Tab2: React.FC = () => {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color={"success"}>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Notification</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Support</IonContent>
      </IonPage>
    );
};

export default Tab2;