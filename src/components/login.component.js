import React, { Component } from 'react'


const axios = require('axios')


export default class Login extends Component {
    constructor (props) {
        super (props)
        this.state = {
            phoneNumber: ''
        }
        this.handleLogIn = this.handleLogIn.bind()
    }

    handleLogIn(event) {
        event.preventDefault()
        const form = event.target
        const login = {
            phoneNumber: form.elements['phoneNumber'].value,
            password: form.elements['password'].value
        }

        axios.post('https://wise-happy-ferryboat.glitch.me/users/login', login).then(res => {
            window.location = `/profile#${res.data}`
        }).catch(err => {
            console.log(`Error: ${err}`)
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleLogIn}>
                <h3>Iniciar Sesión</h3>

                <div className="form-group">
                    <label>Número de teléfono</label>
                    <input type="text" name='phoneNumber' className="form-control" placeholder="Ingresa tu número de télefono" pattern='^\d+$' required/>
                </div>

                <div className='form-group'>
                    <label>Contraseña</label>
                    <input type='password' name='password' className='form-control' placeholder='Ingresa tu contraseña' />
                </div>

                <button type='submit' className='btn btn-primary btn-block'>Continuar</button>
            </form>
        )
    }
}