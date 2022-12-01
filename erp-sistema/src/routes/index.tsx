
import {Routes,Route}from 'react-router-dom'
import { Dashboard, ListagemDePessoas } from '../pages'

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>}/>
            <Route path='/pessoas' element={<ListagemDePessoas/>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
        </Routes>
    )
}