import React, { Fragment, useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { TaskList } from './pages/TaskList';
import { Login } from './pages/Login';

import './App.css';



export function App () {

    const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('user')))

    //const isLogged = JSON.parse(localStorage.getItem('user')) ? true : false

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setIsLogged(true)
        }
    }, [])

    const logout = () => {
        localStorage.clear()
        setIsLogged(false)
    }

    const hasLogged = () => {
        console.log("He logueado")
        setIsLogged(true)
    }
    
    return (
        <Fragment>
            <header>
                <h2>
                    <Link className='nav-element' to='/'>TaskManager</Link>
                </h2>
                <nav>
                    <h4><Link to='/'>Home</Link></h4>
                    {isLogged && <h4><Link to='/tasks'>Tasks</Link></h4>}
                    {isLogged 
                    ? <h4 className='nav-element' onClick={logout} >Logout</h4>
                    : <h4><Link className='nav-element' to='/login'>Login</Link></h4>
                    }
                </nav>
            </header>
            <div style={{padding: '1rem 2rem'}}>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/tasks' element={<TaskList />}></Route>
                <Route path='/login' element={<Login hasLogged={hasLogged }/>}></Route>
            </Routes>
            </div>
            
            <footer>
                <p>Raúl Hernández Iglesias | &copy;2022</p>
            </footer>
        </Fragment>
  )
}
