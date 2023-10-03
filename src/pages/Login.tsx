import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import "./Login.css";
import LoginPhoto from "../media/login-page-photo.png";

import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-app";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introApp, setIntroApp] = useState(true);
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroApp(seen.value === "true");
    };

    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/authenticate", "root");
    }, 2000);
  };

  const displayIntro = async () => {
    console.log("EIGEN PILATES");
    setIntroApp(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  return (
    <div className="loginBody">
      <IonPage>
        <IonHeader className="header">
          <IonToolbar className="ion-margin-top header">
            <IonTitle className="title">Eigen Pilates</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="body ion-padding">
          <IonGrid fixed>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <div className="loginPhoto ion-text-center">
                  <img
                    src={LoginPhoto}
                    alt="Login Photo"
                    className="ion-text-center"
                  />
                </div>
              </IonCol>
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <IonCard className="card">
                  <IonCardContent>
                    <form onSubmit={doLogin}>
                      <IonInput
                        //   labelPlacement="floating"
                        fill="outline"
                        type="email"
                        placeholder="Username or email"
                        className="loginForm ion-padding"
                      ></IonInput>
                      <IonInput
                        className="ion-margin-top loginForm ion-padding"
                        //   labelPlacement="floating"
                        fill="outline"
                        type="password"
                        placeholder="Password"
                      ></IonInput>
                      <IonButton
                        className="ion-margin-top loginButton"
                        type="submit"
                        // type="button"
                        expand="block"
                        fill="clear"
                        // routerLink="/app"
                      >
                        LOG IN
                      </IonButton>
                    </form>

                    <h5 className="ion-text-left ion-padding-top password">
                      Forgot password?
                    </h5>
                    <div className="line ion-margin-top"></div>
                    <div className="signInOptions ion-text-center ion-margin-top">
                      <span>
                        <IonIcon
                          icon={logoApple}
                          className="icons ion-margin-horizontal"
                        ></IonIcon>
                      </span>
                      <span>
                        <IonIcon
                          icon={logoFacebook}
                          className="icons"
                        ></IonIcon>
                      </span>
                      <span>
                        <IonIcon
                          icon={logoGoogle}
                          className="icons ion-margin-horizontal"
                        ></IonIcon>
                      </span>
                    </div>
                    <div className="linkToSignUp ion-text-center ios-margin-bottom">
                      <span className="noAccount">Don't have an account? </span>
                      <span>
                        <a href="/register">Sign Up</a>
                      </span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Login;
