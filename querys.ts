

const Querys = {

    getEntradas: () => `SELECT * FROM MNBAEntradas`,

    getEntradasByDni: (dni) => `SELECT * FROM MNBAEntradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM MNBAEntradas WHERE fecha='${date}'`,

    putEntradaShow: (dni, idEventos, dt) => `UPDATE MNBAEntradas  SET Show=GETDATE() WHERE dni=${dni} AND idEventos=${idEventos}`,

    putEntradaPreshow: (dni, idEventos, dt) => `UPDATE MNBAEntradas  SET Show=GETDATE() WHERE dni=${dni} AND idEventos=${idEventos}`

}

export const querys = Querys