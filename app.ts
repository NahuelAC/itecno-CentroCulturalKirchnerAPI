import * as express from "express";
import {querys} from "./querys";
import {doAndSendQuery} from "./db";

const app = express();
const router = express.Router();
const port = 3000;


//----------------------| Centro Cultural Kirchner Api |------------------------\\

router.get("/all", (req, res) => {
    doAndSendQuery(res, querys.getEntradas());
});

router.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    doAndSendQuery(res, querys.getEntradasByDni(dni));
});

router.put("/ingresado/:dni/:idEventos/:dt", (req, res) => {
    const dni = req.params.dni;
    const idEventos = req.params.idEventos;
    const dt = req.params.dt;

    doAndSendQuery(res, querys.putEntradaWhenIngresado(dni, idEventos, dt));
    // res.json(200);
});

router.post("/localdatabasebackup", (req, res) => {
    const data = {
        espectaculo_id: req.body.espectaculo_id,
        dni: req.body.dni,
        fechayhora: req.body.fechayhora,
        personas: req.body.personas,
        salas: req.body.salas
    }
    doAndSendQuery(res, querys.postCliente(data));
});

//-------------------------------------------------------------------------------\\


app.use('/api/cck/tickets', router);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});