import { DefaultTemplate } from "../../DefaultTemplate";
import { ListaAcomodacao } from "../../components/Divs/Cards/ListaAcomodacao.jsx";
import { Frontal } from "../../components/Divs/Frontal/Frontal.jsx";

export function LandingPage() {
    return(
        <>
        <DefaultTemplate>
        <Frontal />
        <ListaAcomodacao />
        </DefaultTemplate>
        </>

    )
}