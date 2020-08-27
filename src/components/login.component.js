import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Iniciar Sesión</h3>

                <div className='form-group'>
                    <label>Número de telefono</label>
                    <input type='text' className='form-control' placeholder='Ingresa tu número de teléfono' />
                </div>

                <div className='form-group'>
                    <label>Contraseña</label>
                    <input type='password' className='form-control' placeholder='Ingresa tu contraseña' />
                </div>

                <button type='submit' className='btn btn-primary btn-block'>Continuar</button>
            </form>
        )
    }
}