import React, { Component } from 'react'
const axios = require('axios')

export default class Profile extends Component {

    constructor (props) {
        super(props)

        this.updateUser = this.updateUser.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeProfession = this.onChangeProfession.bind(this)
        this.onChangeJobDescription = this.onChangeJobDescription.bind(this)
        this.onChangePriceRate = this.onChangePriceRate.bind(this)

        this.state = {
            id: window.location.hash.slice(1),
            fullName: '',
            birthDate: '',
            phoneNumber: '',
            profession: '',
            jobDescription: '',
            priceRate: ''

        }
    }

    componentDidMount() {
        axios.get(`https://wise-happy-ferryboat.glitch.me/users/${this.state.id}`)
        .then(res => {
            this.setState({
                fullName: `${res.data.firstName} ${res.data.lastName}`,
                birthDate: res.data.birthDate,
                phoneNumber: res.data.phoneNumber,
                profession: res.data.profession,
                jobDescription: res.data.jobDescription,
                priceRate: res.data.priceRate
            })
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    onChangeProfession(e) {
        this.setState({
            profession: e.target.value
        })
    }

    onChangeJobDescription(e) {
        this.setState({
            jobDescription: e.target.value
        })
    }

    onChangePriceRate(e) {
        this.setState({
            priceRate: e.target.value
        })
    }

    updateUser (event) {
        event.preventDefault()
        const user = {
            phoneNumber: this.state.phoneNumber,
            profession: this.state.profession,
            jobDescription: this.state.jobDescription,
            priceRate: Number(this.state.priceRate)
        }
        axios.put(`https://wise-happy-ferryboat.glitch.me/users/update/${this.state.id}`, user)
        .then(res => {
            alert(res.data)
        })
    }

    render() {
        return (
            <form onSubmit={this.updateUser}>
                <h3>Mi Perfil</h3>
                <div className='form-group'>
                    <label>Nombre</label>
                    <p className='form-control'>{this.state.fullName}</p>
                </div>

                <div className='form-group'>
                    <label>Fecha de Nacimiento</label>
                    <p className='form-control'>{this.state.birthDate}</p>
                </div>

                <div className="form-group">
                    <label>Número de teléfono</label>
                    <input type="text" name='phoneNumber' value={this.state.phoneNumber} className="form-control" placeholder="Ingresa tu número de télefono" pattern='^\d+$' onChange={this.onChangePhoneNumber} required/>
                </div>
                
                <div className='form-group'>
                    <label>Profesión</label>
                    <input type="text" name='profession' className="form-control" placeholder="Ingresa tu profesión" pattern='^[^\s].+' value={this.state.profession} onChange={this.onChangeProfession} required/>
                </div>

                <div className='form-group'>
                    <label>Descripcion del trabajo</label>
                    <textarea className='form-control' name='jobDescription' rows='3' value={this.state.jobDescription} onChange={this.onChangeJobDescription} required></textarea>
                </div>

                <div className="form-group">
                    <label>Precio/hora del servicio $MXN</label>
                    <input type="number" name='hourPrice' className="form-control" placeholder="Precio en pesos mexicanos" pattern='^\d+$' value={this.state.priceRate} onChange={this.onChangePriceRate} required/>
                </div>

                <div className="alert alert-primary" role="alert">
                    <span className='info-data'>*Tus datos tienen que estar registrados para que aparezcas en la aplicación movil y puedas se contratado</span>
                </div>
                

                <button type='submit' className='btn btn-primary btn-block'>Guardar Datos</button>
            </form>
        )
    }
}