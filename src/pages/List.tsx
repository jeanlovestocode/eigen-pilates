import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { square, ellipse, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const List: React.FC = () => {
  const [muscle, setMuscle] = useState("biceps");
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = "G+71o8joo8Lke9atLy274w==ubSC8Ru2fOm4H3jG";

    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        const firstFourExercises = result
          .slice(0, 4)
          .map((item: { name: any }) => item.name); 
        setExercises(firstFourExercises);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [muscle]);

  const clearList = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>MY PROGRAM</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={clearList}>
              <IonIcon slot="icon-only" icon={trashBinOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      
      </IonHeader>

      <IonContent className="ion-padding">
        WEEK 1
        <IonCard>
          <IonCardContent>
            <IonItem>
              <IonLabel>
                <IonSelect
                  multiple
                  value={muscle}
                  onIonChange={(e) => setMuscle(e.detail.value)}
                >
                  <IonSelectOption value="biceps">
                    {" "}
                    <div>
                      {" "}
                      <h2 className="ion-padding">Pilates for {muscle}:</h2>
                    </div>
                  </IonSelectOption>
                </IonSelect>
                {isLoading ? (
                  <IonSpinner />
                ) : (
                  <div>
                    <IonList>
                      {exercises.map((exercise, index) => (
                        <IonItem key={index}>
                          <IonLabel>{exercise}</IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                )}
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default List;
