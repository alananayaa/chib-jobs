const router = require('express').Router()
const bcrypt = require('bcrypt')
let User = require('../models/user.model')
const BCRYPT_SALT_ROUNDS = 8

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/add').post((req, res) => {
    const phoneNumber = Number(req.body.phoneNumber)
    const plainPassword = req.body.password
    const birthDate = req.body.birthDate
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    bcrypt.hash(plainPassword, BCRYPT_SALT_ROUNDS)
    .then(password => {
        const newUser = new User({
            phoneNumber,
            password,
            birthDate,
            firstName,
            lastName
        })
        newUser.save()
        .then(() => res.send('Usuario añadido con exito'))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))    
})

router.route('/update/:id').put((req, res) => {
    const phoneNumber = req.body.phoneNumber
    const profession = req.body.profession
    const jobDescription = req.body.jobDescription
    const priceRate = req.body.priceRate

    User.findById(req.params.id)
    .then(user => {
        user.phoneNumber = phoneNumber
        user.profession = profession
        user.jobDescription = jobDescription
        user.priceRate = Number(priceRate)

        user.save()
        .then(() => res.send('El usuario se ha actualizado con exito'))
        .catch(err => res.send(`Error: ${err}`))
    })
    .catch(err => res.status(400).send(`Error: ${err}`))
})

router.route('/login').post((req, res) => {
    const phoneNumber = req.body.phoneNumber
    const password = req.body.password
    let id = ''

    User.findOne({'phoneNumber': phoneNumber})
    .then(user => {
        id = user.id
        return bcrypt.compare(password, user.password)
    })
    .then(samePassword => {
        if (!samePassword){
            res.status(403).send("Check your credentials")
        }
        return res.send(id)
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router