import { Router } from "express";

const routes = Router()

//rota de teste
routes.get("/", (req,res) => {
    return res.send('rota de testeeeeeeeeeeee')
})

//rota que retorna uma lista nomeada "items"

routes.get("/funcionarios", (req,res) => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "kevilin",
                idade: 18,
                custoPorHora: 120.0,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Adulto",
                idade: 17,
                custoPorHora: 100.0,
                temLicenca: false
            },
            {
                id: "3",
                nome: "byte coder",
                idade: 20,
                custoPorHora: 150.0,
                temLicenca: false
            },

        ]
    })
})

export default routes