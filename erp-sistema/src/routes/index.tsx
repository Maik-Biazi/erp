
import { Button } from '@mui/material'
import {Routes,Route,Navigate}from 'react-router-dom'
import { Dashboard } from '../pages'
import { useAppThemeContext } from '../shared/contexts'
export const AppRoutes = ()=>{
    const {toggleTheme}= useAppThemeContext()
    return(
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard/>}/>
            {/* <Route path='*' element={<Navigate to="/"/>}/> */}
        </Routes>
    )
}