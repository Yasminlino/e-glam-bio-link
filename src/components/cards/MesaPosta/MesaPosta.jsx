import React from "react";
import './MesaPosta.css';

export default function MesaPosta() {
    return (
        <div className="cardDecoracao cardMesaPosta">
            <div className="cardLinkConteudoMesa">
                <div className="conteudoTitulo">
                    <h2>Camila Decora</h2>
                    <p className="subtitulo">Mesa Posta</p>
                </div>

                <h3 className="cardHeadline">Decore sua mesa com charme</h3>

                <a
                    href="https://e-glam.com.br/guia-mesa-posta"
                    className="botaoCard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📘 Comprar guia
                </a>

                <p className="chamadaAposBotao">
                    Guia prático com ideias para montar mesas lindas.
                </p>
            </div>

            <div className="cardLinkImageMesa">
                <img className="imagemCardMesa" src="./assets/images/mesa-posta.png" alt="Mesa posta decorada" />
                <img className="brilhoCardMesa" src="./assets/images/brilhos.png" alt="Brilho decorativo" />
            </div>
                <img className="brilhoCardMesa" src="./assets/images/brilhos.png" alt="Brilho decorativo" />
        </div>
    );
}
