
import {Routes,Route}from 'react-router-dom'
import { Dashboard, DetalheDePessoas, ListagemDePessoas } from '../pages'

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>}/>
            <Route path='/pessoas' element={<ListagemDePessoas/>}/>
            <Route path='/pessoas/detalhe/:id' element={<DetalheDePessoas/>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
        </Routes>
    )
}