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
        <IonHeader>
          <IonToolbar color={"background-color"} className="ion-margin-top">
            <IonTitle className="title">Eigen Pilates</IonTitle>
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
            <IonCardContent>
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
              <div className="ion-text-center or">OR</div>
              <div className="signInOptions">
                <IonIcon
                  icon={logoApple}
                  className="icons ion-justify-content-center"
                ></IonIcon>

                <IonIcon
                  icon={logoFacebook}
                  className="icons ion-justify-content-center"
                ></IonIcon>

                <IonIcon
                  icon={logoGoogle}
                  className="icons ion-justify-content-center"
                ></IonIcon>
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
