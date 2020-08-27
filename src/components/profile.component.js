import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <form>
                <h3>Mi Perfil</h3>
                <div className='form-group'>
                    <label>Nombre</label>
                    <p className='form-control'>Alan Anaya Araujo</p>
                </div>

                <div className='form-group'>
                    <label>Fecha de Nacimiento</label>
                    <p className='form-control'>26/12/1994</p>
                </div>
                
                <div className='form-group'>
                    <label>Profesión</label>
                    <input type="text" name='profession' className="form-control" placeholder="Ingresa tu profesión" pattern='^[^\s].+' required/>
                </div>

                <div className='form-group'>
                    <label>Descripcion del trabajo</label>
                    <textarea className='form-control' name='jobDescription' rows='3' required></textarea>
                </div>

                <div className="form-group">
                    <label>Precio/hora del servicio $MXN</label>
                    <input type="number" name='hourPrice' className="form-control" placeholder="Precio en pesos mexicanos" pattern='^\d+$' required/>
                </div>

                <div class="alert alert-primary" role="alert">
                    <span className='info-data'>*Tus datos tienen que estar registrados para que aparezcas en la aplicación movil y puedas se contratado</span>
                </div>
                

                <button type='submit' className='btn btn-primary btn-block'>Guardar Datos</button>
            </form>
        )
    }
}