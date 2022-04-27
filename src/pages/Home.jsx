import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {

    const navigate = useNavigate()

    const userName = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).name : null

    const goTaksList = () => {
        navigate('/tasks')
    }

    return (
        <Fragment>
            <h1 className='page-title' style={{'font-size': '3rem'}}>Bienvenido a TaskManager</h1>
            
            {userName
                ? <Fragment>
                    <h1 className='page-title' style={{'font-size': '3rem'}}>{userName}</h1>
                    <h4 className='page-subtitle'>¡Ya puedes acceder a tu lista de tareas!</h4>
                    <h5 className='page-subtitle' style={{textDecoration: 'underline'}} onClick={goTaksList}>👉​Acceder a mi lista de tareas 👈​</h5>
                  </Fragment>
                : <h4 className='page-subtitle error'>Aún no has iniciado sesión</h4>
            }
        </Fragment>
    )
}
