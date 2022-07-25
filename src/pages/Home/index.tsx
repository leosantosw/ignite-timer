import { Play } from "phosphor-react";
import React from "react";
import { CountdownContainer, FormContainer, HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <FormContainer>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />
          
          <label htmlFor="minutes">Durante</label>
          <input type="number" id="minutes"/>
          <span>minutos.</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span> 
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play />
          Começar
        </button>

      </FormContainer>
    </HomeContainer>
  )
}