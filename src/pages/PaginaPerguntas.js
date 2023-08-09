import { useParams, Link } from 'react-router-dom';
import { Perguntas } from '../perguntas';
//import LogoVarejoBranco from '../assets/Logo_Varejo_Branco.png';
import MarcaSebraeBranca from '../assets/marca-sebrae-branca.png';
import PerguntaCard from '../components/PerguntaCard';

export default function PaginaPerguntas() {
  const { tema } = useParams();

  let corTema = '';

  let temaCompleto = '';

  if (tema === 'Produção') {
    corTema = '#055bb9';
    temaCompleto = 'Produção de leite e indústria';
  } else if (tema === 'Nutrição') {
    corTema = '#5c7b2d';
    temaCompleto = 'Nutrição e qualidade do leite';
  } else {
    corTema = '#04939b';
    temaCompleto = 'Consumo e curiosidades';
  }

  /* if (botaoVoltar.style.backgroundColor === '#fff') {
    console.log('NSDFHDSIFDSJI');
  } */

  const pergunta = Perguntas.filter((pergunta) => pergunta.tema === tema);
  //console.log(pergunta);
  const perguntaSelecionada =
    pergunta[Math.floor(Math.random() * pergunta.length)];
  //console.log(perguntaSelecionada);
  const perguntasAleatorizadas = perguntaSelecionada.alternativas.sort(
    (a, b) => 0.5 - Math.random()
  );

  const mouseEnterVoltar = (e) => {
    e.target.style.color = corTema;
  };

  const mouseLeaveVoltar = (e) => {
    e.target.style.color = '#fff';
  };

  return (
    <div className="container_perguntas">
      <div className="pergunta" style={{ backgroundColor: corTema }}>
        <div className="infoPergunta">
          <img src={MarcaSebraeBranca} alt="L=Logo Sebrea Branca" />
          <p>Tema: {temaCompleto}</p>
        </div>
        <p className="texto-pergunta">{perguntaSelecionada.pergunta}</p>
        <div className="botao-voltar">
          <Link to="/">
            <button
              onMouseEnter={mouseEnterVoltar}
              onMouseLeave={mouseLeaveVoltar}
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
      <PerguntaCard
        perguntasAleatorizadas={perguntasAleatorizadas}
        tema={corTema}
      />
    </div>
  );
}
