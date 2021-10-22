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
router.put("/show/:idEntradas", function (req, res) {
    var idEntradas = req.params.idEntradas;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaShow(idEntradas));
});
router.put("/preshow/:idEntradas", function (req, res) {
    var idEntradas = req.params.idEntradas;
    (0, db_1.putAndSendQuery)(res, querys_1.querys.putEntradaPreshow(idEntradas));
});
//-------------------------------------------------------------------------------\\
app.use('/api/cck/tickets', router);
app.listen(port, function () {
    console.log("Api listening at http://localhost:" + port);
});
