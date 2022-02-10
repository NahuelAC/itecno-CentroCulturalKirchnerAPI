

const Querys = {

    getEventos: () => `SELECT * FROM Eventos`,

    getEventoById: (id) => `SELECT * FROM Eventos WHERE idEventos='${id}'`,

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni, id_evento) => `GetEntradas '${dni}', ${id_evento}`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE fecha='${date}'`,

    putEntradaShow: (idEntradas, sid) => `UPDATE Entradas  SET Show=GETDATE(), Sid='${sid}' WHERE idEntradas=${idEntradas}`,

    putEntradaPreshow: (idEntradas, presid) => `UPDATE Entradas  SET Preshow=GETDATE(), PreSid='${presid}' WHERE idEntradas=${idEntradas}`

}

export const querys = Querys