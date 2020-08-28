import React, { Component } from "react"
import axios from 'axios'


export default class SignUp extends Component {

    constructor (props) {
        super(props)
        this.state = {
            phoneNumber: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        if (!event.target.checkValidity()) {
            alert('Ingresaste información invalida\nRevisa los cuadros en rojo')
            return
        }
        const form = event.target

        const newUser = {
            phoneNumber: form.elements['phoneNumber'].value,
            password: form.elements['password'].value,
            birthDate: form.elements['birthDate'].value,
            firstName: form.elements['firstName'].value,
            lastName: form.elements['lastName'].value
        }
        
        axios.post('http://localhost:5000/users/add', newUser)
        .then(res => {
            alert(res.data)
            window.location = '/'
        })
        .catch(err => {
            console.log(`Error: ${err}`)
        })
        
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
                    <input type="password" name='password' className="form-control" placeholder="Al menos 8 caracteres" pattern='.{8,}' required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    }
}