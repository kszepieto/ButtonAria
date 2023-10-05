import React from "react";
import "./ExploreContainer.css";
import { IonButton } from "@ionic/react";

const ExploreContainer: React.FC = () => {
  return (
    <div id="container">
      <div>
        <input type="text"></input>
      </div>
      <h2 id="h2Id1"> Some content 1</h2>
      <h2 id="h2Id2">Some content 2</h2>

      <div>
        <IonButton aria-describedby="h2Id1">
          <span aria-describedby="h2Id1">IonButton 1</span>
        </IonButton>
        <IonButton aria-describedby="h2Id2">IonButton 2</IonButton>
      </div>

      <div>
        <button role="button" aria-describedby="h2Id1">
          Normal 1
        </button>
        <button role="button" aria-describedby="h2Id2">
          Normal 2
        </button>
      </div>
      <span tabIndex={0} role="button" aria-describedby="h2Id2">
        Span 1
      </span>
    </div>
  );
};

export default ExploreContainer;
