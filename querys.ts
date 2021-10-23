

const Querys = {

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE fecha='${date}'`,

    putEntradaShow: (idEntradas, presid) => `UPDATE Entradas  SET Show=GETDATE() PreSid='${presid}' WHERE idEntradas=${idEntradas}`,

    putEntradaPreshow: (idEntradas, sid) => `UPDATE Entradas  SET Preshow=GETDATE() Sid='${sid}' WHERE idEntradas=${idEntradas}`

}

export const querys = Querys