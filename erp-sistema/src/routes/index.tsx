
import {Routes,Route,Navigate}from 'react-router-dom'
export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/pagina-inicial' element={ <p>Teste Rota</p>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}