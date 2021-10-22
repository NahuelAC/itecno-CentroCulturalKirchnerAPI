"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM MNBAEntradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM MNBAEntradas WHERE dni='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM MNBAEntradas WHERE fecha='" + date + "'"; },
    putEntradaShow: function (idEntradas) { return "UPDATE MNBAEntradas  SET Show=GETDATE() WHERE idEntradas=" + idEntradas; },
    putEntradaPreshow: function (idEntradas) { return "UPDATE MNBAEntradas  SET Preshow=GETDATE() WHERE idEntradas=" + idEntradas; }
};
exports.querys = Querys;
