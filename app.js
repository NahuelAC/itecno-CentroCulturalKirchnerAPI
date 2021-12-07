"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var querys_1 = require("./querys");
var db_1 = require("./db");
var app = express();
var router1 = express.Router();
var router2 = express.Router();
var port = 3000;
//----------------------| Centro Cultural Kirchner Api |------------------------\\
router1.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradas());
});
router1.get("/bydni/:dni", function (req, res) {
    var dni = req.params.dni;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEntradasByDni(dni));
});
router1.put("/show/:idEntradas/:deviceid", function (req, res) {
    var idEntradas = req.params.idEntradas;
    var deviceid = req.params.deviceid;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaShow(idEntradas, deviceid));
});
router1.put("/preshow/:idEntradas/:deviceid", function (req, res) {
    var idEntradas = req.params.idEntradas;
    var deviceid = req.params.deviceid;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaPreshow(idEntradas, deviceid));
});
router2.get("/all", function (req, res) {
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEventos());
});
router2.get("/byid/:id", function (req, res) {
    var id = req.params.id;
    (0, db_1.doAndSendQuery)(res, querys_1.querys.getEventoById(id));
});
//-------------------------------------------------------------------------------\\
app.use('/api/cck/tickets', router1);
app.use('/api/cck/eventos', router2);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
