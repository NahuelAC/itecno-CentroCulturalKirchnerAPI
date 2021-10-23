"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querys = void 0;
var Querys = {
    getEntradas: function () { return "SELECT * FROM Entradas"; },
    getEntradasByDni: function (dni) { return "SELECT * FROM Entradas WHERE dni='" + dni + "'"; },
    getEntradasByDate: function (date) { return "SELECT * FROM Entradas WHERE fecha='" + date + "'"; },
    putEntradaShow: function (idEntradas, presid) { return "UPDATE Entradas  SET Show=GETDATE() PreSid='" + presid + "' WHERE idEntradas=" + idEntradas; },
    putEntradaPreshow: function (idEntradas, sid) { return "UPDATE Entradas  SET Preshow=GETDATE() Sid='" + sid + "' WHERE idEntradas=" + idEntradas; }
};
exports.querys = Querys;
