"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM MNBAEntradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM MNBAEntradas WHERE dni='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM MNBAEntradas WHERE fecha='" + date + "'"; },
    putEntradaWhenIngresado: function (dni, idEventos, dt) { return "UPDATE MNBAEntradas SET Ingresado='" + dt + "' WHERE dni=" + dni + " AND idEventos=" + idEventos; },
    postCliente: function (data) { return "INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('" + data.espectaculo_id + "', '" + data.dni + "', '" + data.fechayhora + "', '" + data.personas + "', '" + data.sala + "')"; }
};
exports.querys = Querys;
