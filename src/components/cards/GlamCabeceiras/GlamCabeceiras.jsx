import React from "react";
import './GlamCabeceiras.css';

export default function GlamCabeceiras() {
    return (
        <div className="cardDecoracao">
            <div className="heartIcon">
                <img src="./assets/images/icone-whats.png" alt="Coração decorativo" />
            </div>

            <div className="cardGlamLinkImage">
                <img className="imagemCardGlam" src="./assets/images/logo-glam.png" alt="Foto de perfil" />
            </div>
            <div className="cardGlamLinkConteudo">
                <div className="conteudoTituloGlam">
                    <h2>Glam Estofados</h2>
                    <p className="subtituloGlam">Cabeceiras e estofados</p>
                </div>
                <h3 className="cardGlamHeadline">Solicite o seu orçamento!</h3>
                <a
                    href="https://e-glam.com.br"
                    className="botaoCard"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🛋️ Entrar em contato
                </a>

                <p className="chamadaAposBotao">
                    <strong>Entre em contato</strong> e solicite agora mesmo o seu orçamento!
                </p>
            </div>
        </div>
    );
}
