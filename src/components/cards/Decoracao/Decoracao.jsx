import React from "react";
import './Decoracao.css';

export default function Decoracao() {
    return (
        <div className="cardDecoracao">
            <div className="heartIcon heartIconDecoracao">
                <img src="./assets/images/icone-casa.png" alt="Coração decorativo" />
            </div>

            <div className="cardLinkImage">
                <img className="imagemCard" src="./assets/images/imagem-palestrando.png" alt="Foto de perfil" />
            </div>
            <div className="cardLinkConteudo">
                <div className="conteudoTitulo">
                    <h2>Camila Decora</h2>
                    <p className="subtitulo">Decoração</p>
                </div>
                <h3 className="cardHeadline">Transforme sua casa com estilo</h3>
                <a
                    href="https://e-glam.com.br"
                    className="botaoCard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🛋️ Acesse o guia de decoração
                </a>

                <p className="chamadaAposBotao">
                    <strong>Acesse a página</strong> exclusiva e veja tudo que preparamos para você!
                </p>
            </div>
        </div>
    );
}
