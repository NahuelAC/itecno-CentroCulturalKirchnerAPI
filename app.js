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
router.get("/show/:dni/:idEventos/:dt", function (req, res) {
    var dni = req.params.dni;
    var idEventos = req.params.idEventos;
    var dt = req.params.dt;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.putEntradaShow(dni, idEventos, dt), true);
});
router.get("/preshow/:dni/:idEventos/:dt", function (req, res) {
    var dni = req.params.dni;
    var idEventos = req.params.idEventos;
    var dt = req.params.dt;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.putEntradaPreshow(dni, idEventos, dt), true);
});
//-------------------------------------------------------------------------------\\
app.use('/api/cck/tickets', router);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
