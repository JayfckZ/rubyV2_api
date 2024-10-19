const express = require('express')
const app = express()
const vehicles = require('./data/vehicles.json')

app.get('/vehicles', (req, res) => res.json(vehicles))

app.get('/category/:category', (req, res) => {
    const category = req.params.category
    const filteredVehicles = vehicles.filter(vehicle => vehicle.category === category)
    
    if (filteredVehicles.length > 0) {
        res.json(filteredVehicles);
    } else {
        res.status(404).json({ message: 'Categoria não encontrada' });
    }
})

app.get('/vehicle/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const vehicle = vehicles.find(vehicle => vehicle.id === id)
    
    if (vehicle) {
        res.json(vehicle);
    } else {
        res.status(404).json({ message: 'Veículo não encontrado' });
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servidor ativo na porta ${PORT}`)
})