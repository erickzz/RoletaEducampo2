import React from 'react';
import WheelComponent from '../components/wheel';
import '../index.css';
//import LogoVarejo from '../assets/Logo_Varejo.png';
//import LogoFocus from '../assets/Logo_Focus.png';
import ClickIcon from '../assets/Click_Icon.jpeg';
import MarcaSebrae from '../assets/marca-sebrae.png';
import LogoParque from '../assets/Logo_Parque.png';
import LogoArena from '../assets/Logo_Arena.png';
import logo_educampo from '../assets/logo_educampo.png';

import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const segments = ['Educampo', 'Gestão', 'Mercado'];
  const segColors = ['#055bb9', '#5c7b2d', '#04939b'];
  const onFinished = (winner) => {
    //console.log(winner);
    setTimeout(() => {
      navigate(`/${winner}`);
    }, 600);
  };

  let rotacao = Math.floor(Math.random() * 400);

  if (rotacao < 150) {
    rotacao = 150;
  }

  console.log(rotacao);

  return (
    <>
      <div className="main_text">
        <p>Quiz Educampo</p>
      </div>

      <img className="icone-click" src={ClickIcon} alt="Ícone de Clique" />

      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="#FCF4F7"
        contrastColor="white"
        buttonText=""
        isOnlyOnce={false}
        size={260}
        upDuration={100}
        downDuration={rotacao}
        fontFamily="Arial"
      />
      <div className="left_img">
        <img src={logo_educampo} alt="Logo Educampo" />
      </div>
      <div className="right_img">
        <img src={MarcaSebrae} alt="Logo Sebrae" />
      </div>
    </>
  );
};

export default App;
