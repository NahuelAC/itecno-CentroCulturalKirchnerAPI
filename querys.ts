

const Querys = {

    getEntradas: () => `SELECT * FROM MNBAEntradas`,

    getEntradasByDni: (dni) => `SELECT * FROM MNBAEntradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM MNBAEntradas WHERE fecha='${date}'`,

    putEntradaShow: (idEntradas) => `UPDATE MNBAEntradas  SET Show=GETDATE() WHERE idEntradas=${idEntradas}`,

    putEntradaPreshow: (idEntradas) => `UPDATE MNBAEntradas  SET Preshow=GETDATE() WHERE idEntradas=${idEntradas}`

}

export const querys = Querys