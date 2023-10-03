import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonButtons,
  IonBackButton,
  useIonRouter,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { logoApple, logoFacebook, logoGoogle } from "ionicons/icons";
import React from "react";
import RegisterPhoto from "../media/Register-page-photo (1).png";
import "./Register.css";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };

  return (
    <div className="loginBody">
      <IonPage>
        <IonHeader className="header">
          <IonToolbar className="ion-margin-top header">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" /> Back
            </IonButtons>
            <IonTitle className="title">Create Account</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent scrollY={false} className="body">
          <IonGrid fixed>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <div className="loginPhoto ion-text-center">
                  <img
                    src={RegisterPhoto}
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
                    <form onSubmit={doRegister}>
                      <IonInput
                        //   labelPlacement="floating"
                        fill="outline"
                        type="text"
                        placeholder="Username"
                        className="loginForm ion-padding"
                      ></IonInput>
                      <IonInput
                        className="ion-margin-top loginForm ion-padding"
                        //   labelPlacement="floating"
                        fill="outline"
                        type="password"
                        placeholder="Password"
                      ></IonInput>
                      <IonInput
                        className="ion-margin-top loginForm ion-padding"
                        //   labelPlacement="floating"
                        fill="outline"
                        type="password"
                        placeholder="Confirm Password"
                      ></IonInput>
                      <IonCheckbox
                        labelPlacement="end"
                        className="ion-padding-top password"
                      >
                        <span className="ion-text-center">
                          I Agree to Terms & Conditions and Privacy Policy
                        </span>
                      </IonCheckbox>
                      <IonButton
                        className="ion-margin-top loginButton"
                        type="submit"
                        expand="block"
                      >
                        GET STARTED
                      </IonButton>
                    </form>

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
                      <span className="noAccount">
                        Already have an account?{" "}
                      </span>
                      <span>
                        <a href="/">Sign In</a>
                      </span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>

        {/* <IonFooter className="ion-text-center footer">
          <IonToolbar>Coded by Jean Edem</IonToolbar>
        </IonFooter> */}
      </IonPage>
    </div>
  );
};

export default Register;
