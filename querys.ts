

const Querys = {

    getEntradas: () => `SELECT * FROM Entradas`,

    getEntradasByDni: (dni) => `SELECT * FROM Entradas WHERE dni='${dni}'`,

    getEntradasByDate: (date) => `SELECT * FROM Entradas WHERE fecha='${date}'`,

    putEntradaWhenIngresado: (dni, idEventos, dt) => `UPDATE Entradas SET Ingresado='${dt}' WHERE dni=${dni} AND idEventos=${idEventos}`,

    postCliente: (data) => `INSERT INTO <table> (espectaculo_id, dni, fechayhora, personas, sala) ('${data.espectaculo_id}', '${data.dni}', '${data.fechayhora}', '${data.personas}', '${data.sala}')`

}

export const querys = Querys