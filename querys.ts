

const Querys = {

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE fecha='${date}'`,

    putEntradaShow: (idEntradas) => `UPDATE Entradas  SET Show=GETDATE() WHERE idEntradas=${idEntradas}`,

    putEntradaPreshow: (idEntradas) => `UPDATE Entradas  SET Preshow=GETDATE() WHERE idEntradas=${idEntradas}`

}

export const querys = Querys