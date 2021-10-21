"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var querys_1 = require("./querys");
var db_1 = require("./db");
var app = express();
var router = express.Router();
var port = 3000;
//----------------------| Centro Cultural Kirchner Api |------------------------\\
router.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradas());
});
router.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni));
});
router.put("/ingresado/:dni/:idEventos/:dt", function (req, res) {
    var dni = req.params.dni;
    var idEventos = req.params.idEventos;
    var dt = req.params.dt;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.putEntradaWhenIngresado(dni, idEventos, dt));
    // res.json(200);
});
router.post("/localdatabasebackup", function (req, res) {
    var data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    };
    (0, db_1.doAndSendQuery)(res, querys_1.querys.postCliente(data));
});
//-------------------------------------------------------------------------------\\
app.use('/api/cck/tickets', router);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
