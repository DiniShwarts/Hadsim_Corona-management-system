import { Routes, Route, Navigate } from 'react-router-dom'
import ProfilePicture from "./logIn"
import All_clients from './all_clients'
import NavBar from './navBar'
import Corona_survey from './corona_survey'
import LogIn_manager from './logIn_manager'
import Home_page from './home_page'
import get_datails from './details'
export default function Router() {

    return <div>
        <NavBar />
        <Routes>
            <Route path='home_page' element={<Home_page />}></Route>
            <Route path='logIn' element={<ProfilePicture />}></Route>
            <Route path='all_clients' element={<All_clients />}></Route>
            <Route path='corona_survey' element={<Corona_survey />}></Route>
            <Route path='datails' element={<get_datails />}></Route>
            <Route path='logIn_manager' element={<LogIn_manager />}></Route>
            <Route path='/' element={<Navigate to='/Home_page' />}></Route>
        </Routes>
    </div>
}