import React from "react";
import './Decoracao.css';

export default function Decoracao() {
    return (
        <div className="cardDecoracao card1">
            <div className="heartIcon">
                <img src="./assets/images/coracao-dourado.png" alt="Coração decorativo" />
            </div>

            <div className="cardLinkImage">
                <img className="imagemCard" src="./assets/images/imagem-palestrando.png" alt="Logo Glam Cabeceiras" />
            </div>
            <div className="cardLinkConteudo">
                <div className="conteudoTitulo">
                    <h2>Glam Cabeceiras</h2>
                    <p className="subtitulo">Estofados</p>
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
