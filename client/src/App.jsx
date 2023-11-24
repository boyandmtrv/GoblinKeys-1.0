import './App.css';
import { Routes, Route } from 'react-router-dom';

import AuthContext, { AuthProvider } from './contexts/AuthContext';

import Header from './components/header/Header';
import Home from './components/home/Home'
import Login from './components/user/Login'
import Register from './components/user/Register'
import GameController from './components/game/gameController';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import AllGames from './components/all-games/AllGames';
import GameDetails from './components/game-details/GameDetails';
import Welcome from './components/home/Welcome';
import Logout from './components/user/Logout';
import Paths from './paths';


function App() {
   
    return (
        <AuthProvider>
            <div className='App bg-zinc-800'>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/profile' element={<Welcome />}></Route>
                    <Route path='/play' element={<GameController />}></Route>
                    <Route path="/games" element={<AllGames />}></Route>
                    <Route path='/games/create' element={<Create />}></Route>
                    <Route path='/games/:id/details' element={<GameDetails />}></Route>
                    <Route path={Paths.Edit} element={<Edit />}></Route>
                    <Route path='/users/login' element={<Login />}></Route>
                    <Route path='/users/register' element={<Register />}></Route>
                    <Route path='/users/logout' element={<Logout />}></Route>
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App;

