"use strict";
exports.__esModule = true;
exports.querys = void 0;
var Querys = {
    getEventos: function () { return "SELECT * FROM Eventos"; },
    getEventoById: function (id) { return "SELECT * FROM Eventos WHERE idEventos='".concat(id, "'"); },
    getEntradas: function () { return "SELECT * FROM Entradas"; },
    getEntradasByDni: function (dni, id_evento) { return "GetEntradas '".concat(dni, "', ").concat(id_evento); },
    getEntradasByDate: function (date) { return "SELECT * FROM Entradas WHERE fecha='".concat(date, "'"); },
    putEntradaShow: function (idEntradas, sid) { return "UPDATE Entradas  SET Show=GETDATE(), Sid='".concat(sid, "' WHERE idEntradas=").concat(idEntradas); },
    putEntradaPreshow: function (idEntradas, presid) { return "UPDATE Entradas  SET Preshow=GETDATE(), PreSid='".concat(presid, "' WHERE idEntradas=").concat(idEntradas); }
};
exports.querys = Querys;
