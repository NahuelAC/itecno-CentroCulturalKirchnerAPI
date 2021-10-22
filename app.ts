import * as express from "express";
import {querys} from "./querys";
import {doAndSendQuery, putAndSendQuery} from "./db";

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

router.put("/show/:dni/:idEventos/:dt", (req, res) => {
    const dni = req.params.dni;
    const idEventos = req.params.idEventos;
    const dt = req.params.dt;

    putAndSendQuery(res, querys.putEntradaShow(dni, idEventos, dt));
});

router.put("/preshow/:dni/:idEventos/:dt", (req, res) => {
    const dni = req.params.dni;
    const idEventos = req.params.idEventos;
    const dt = req.params.dt;

    putAndSendQuery(res, querys.putEntradaPreshow(dni, idEventos, dt));
});

//-------------------------------------------------------------------------------\\

app.use('/api/cck/tickets', router);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});