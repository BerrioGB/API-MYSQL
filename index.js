import express from "express";

const app = express()

app.get('/employees', (req,res) => res.send('Get employees'))

app.post('/employees', (req,res) => res.send('Post employees'))

app.put('/employees', (req,res) => res.send('Update employees'))

app.delete('/employees', (req,res) => res.send('Delete employees'))

app.listen(3000)
console.log('Servidor Escuchando en puerto 3000')