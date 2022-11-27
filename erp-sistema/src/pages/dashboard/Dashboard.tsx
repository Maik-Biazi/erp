import { FerramentasDaListagem, FerramentasDeDetathe } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layout"

export const Dashboard = ()=>{
    return(
        <LayoutBaseDePagina titulo="Pagina Inicial" barraDeFerramentas={(
            <FerramentasDeDetathe /> 
        )}>
            teste
        </LayoutBaseDePagina>
    )
}