"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM MNBAEntradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM MNBAEntradas WHERE dni='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM MNBAEntradas WHERE fecha='" + date + "'"; },
    putEntradaShow: function (dni, idEventos, dt) { return "UPDATE MNBAEntradas SET Show='" + dt + "' WHERE dni=" + dni + " AND idEventos=" + idEventos; },
    putEntradaPreshow: function (dni, idEventos, dt) { return "UPDATE MNBAEntradas SET Preshow='" + dt + "' WHERE dni=" + dni + " AND idEventos=" + idEventos; }
};
exports.querys = Querys;
