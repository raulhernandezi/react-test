import React, {Fragment, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const users = [
    {
        name: 'Usuario A',
        email: 'a@a.com',
        password: '123'
    },
    {
        name: 'Usuario B',
        email: 'b@b.com',
        password: '456'
    },
    {
        name: 'Usuario C',
        email: 'c@c.com',
        password: '789'
    }
]


export function Login( {hasLogged} ) {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    //CUANDO HAY UN CAMBIO EN EL INPUT
    const handleChange = (event) => {
        //VALORES Y KEYS DEL FORMULARIO
        const {name, value} = event.target;
        //ACTUALIZO MI STATE QUE CONTIENE EL DATA
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        //Evito que se reicione la pagina
        event.preventDefault();
        console.log(userData)
        //VALIDAR SI EL USUARIO EXISTE
        const user = users.find(user => user.email === userData.email && user.password === userData.password)
        if (user) {
            console.log('Usuario encontrado')
            localStorage.setItem('user', JSON.stringify({
                name: user.name,
                email: user.email
            }))
            hasLogged(true)
            navigate('/')
        } else {
            alert('Usuario no encontrado')
        }
    }


    return (
        <Fragment>
            <h1 className='page-title'>Login</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" placeholder='Email' onChange={handleChange}/>
                </div>
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder='Conraseña' onChange={handleChange}/>
                </div>
                <input type="submit" value="Iniciar Sesión"/>
            </form>
        </Fragment>
    )
}
