import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle, logoIonic } from "ionicons/icons";
import React from "react";
import "./Login.css";
import LoginPhoto from "../media/login-page-photo.png";

const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.PreventDefault();
    console.log("doLogin");
  };

  return (
    <div className="loginBody">
      <IonPage>
        <IonHeader className="header">
          <IonToolbar className="ion-margin-top header">
            <IonTitle className="title header">Eigen Pilates</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent scrollY={false} className="body">
          <div className="loginPhoto ion-text-center">
            <img
              src={LoginPhoto}
              alt="Login Photo"
              className="ion-text-center"
            />
          </div>

          <IonCard>
            <IonCardContent className="card">
              <form onSubmit={doLogin}>
                <IonInput
                  label=""
                  //   labelPlacement="floating"
                  fill="outline"
                  type="text"
                  placeholder="Username or email"
                  className="loginForm ion-padding"
                ></IonInput>
                <IonInput
                  className="ion-margin-top loginForm ion-padding"
                  label=""
                  //   labelPlacement="floating"
                  fill="outline"
                  type="password"
                  placeholder="Password"
                ></IonInput>
                <IonButton
                  className="ion-margin-top loginButton"
                  type="button"
                  expand="block"
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
                  <IonIcon icon={logoFacebook} className="icons"></IonIcon>
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
        </IonContent>

        {/* <IonFooter className="ion-text-center footer">
          <IonToolbar>Coded by Jean Edem</IonToolbar>
        </IonFooter> */}
      </IonPage>
    </div>
  );
};

export default Login;
