import React from "react";
import './Livro.css';

export default function Livro() {
    return (
        <div className="cardDecoracao cardLivro">
            <div className="cardLinkImage">
                <img className="imagemCard" src="./assets/images/livro.png" alt="Foto de perfil" />
            </div>
            <div className="cardLinkConteudo">
                <div className="conteudoTitulo">
                    <h2>Agenda Decor Day</h2>
                    <p className="subtitulo colorGray">Decoração</p>
                </div>
                <h3 className="cardHeadline">Agende agora sua vaga!</h3>
                <a
                    href="https://e-glam.com.br"
                    className="botaoCard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🛋️ Clique aqui para agendar!
                </a>

                <p className="chamadaAposBotao colorGray">
                    <strong>Vagas limitadas</strong> Aproveite e se inscreva em nossa Agenda!
                </p>
            </div>
        </div>
    );
}
