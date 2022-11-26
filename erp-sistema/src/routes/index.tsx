
import {Routes,Route}from 'react-router-dom'
import { Dashboard } from '../pages'

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
        </Routes>
    )
}