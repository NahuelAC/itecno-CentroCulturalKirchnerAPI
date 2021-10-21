

const Querys = {

    getEntradas: () => `SELECT * FROM MNBAEntradas`,

    getEntradasByDni: (dni) => `SELECT * FROM MNBAEntradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM MNBAEntradas WHERE fecha='${date}'`,

    putEntradaWhenIngresado: (dni, idEventos, dt) => `UPDATE MNBAEntradas SET Ingresado='${dt}' WHERE dni=${dni} AND idEventos=${idEventos}`,

    postCliente: (data) => `INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}')`

}

export const querys = Querys