import React from "react";
import './TecidosETexturas.css';

export default function TecidosETexturas() {
    return (
        <div className="cardDecoracao cardTecidos">
            {/* <div className="sombraOverlay"></div> */}
            <div className="heartIcon">
                <img src="./assets/images/coracao-dourado.png" alt="Coração decorativo" />
            </div>

            <div className="cardLinkImage">
                <img className="imageTecido" src="./assets/images/tecido.png" alt="Logo Glam Cabeceiras" />
            </div>
            <div className="cardLinkConteudo z-1">
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
