import React, { Component } from "react"

export default class SignUp extends Component {

    handleSubmit(event) {
        event.preventDefault()
        if (!event.target.checkValidity()) {
            alert('Ingresaste información invalida\nRevisa los cuadros en rojo')
            return
        }
        const form = event.target
        
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" name='firstName' className="form-control" placeholder="Ingresa tu nombre" pattern='^[a-zA-Z]+\s*[a-zA-Z]+$' required />
                </div>

                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="text" name='lastName' className="form-control" placeholder="Ingresa tus Apellidos" pattern='^[a-zA-Z]+\s*[a-zA-Z]+$' required />
                </div>

                <div className="form-group">
                    <label>Número de teléfono</label>
                    <input type="text" name='phoneNumber' className="form-control" placeholder="Ingresa tu número de télefono" pattern='^\d+$' required/>
                </div>

                <div className="form-group">
                    <label>Fecha de nacimiento</label>
                    <input type="text" name='birthDate' className="form-control" placeholder="DD/MM/AAAA" pattern='^[0-3]*[1-9]\/([1]*[12]|[0]*[1-9])\/[12]\d{3}$' required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Al menos 8 caracteres" pattern='.{8,}' required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}