import React from "react";
import './BioLink.css';
import Decoracao from "../cards/Decoracao/decoracao";
import AgendaDecorDay from "../cards/AgendaDecorDay/AgendaDecorDay";
import GlamCabeceiras from "../cards/GlamCabeceiras/GlamCabeceiras";
import MesaPosta from "../cards/MesaPosta/MesaPosta";
import TecidosETexturas from "../cards/TecidosETexturas/TecidosETexturas";

export default function BioLink() {
    return (
        <div className="bioLink">
            <Decoracao />
            <TecidosETexturas />
            <MesaPosta />
            <AgendaDecorDay />
            <GlamCabeceiras />
        </div>
    );
}
