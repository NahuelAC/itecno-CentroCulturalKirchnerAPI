import * as express from "express";
import {querys} from "./querys";
import {doAndSendQuery, putAndSendQuery} from "./db";

const app = express();
const router1 = express.Router();
const router2 = express.Router();
const port = 3001;


//----------------------| Centro Cultural Kirchner Api |------------------------\\

router1.get("/all", (req, res) => {
    doAndSendQuery(res, querys.getEntradas());
});

router1.get("/bydni/:dni", (req, res) => {
    const dni = req.params.dni;
    doAndSendQuery(res, querys.getEntradasByDni(dni));
});

router1.put("/show/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaShow(idEntradas, deviceid));
});

router1.put("/preshow/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaPreshow(idEntradas, deviceid));
});


router2.get("/all", (req, res) => {
    doAndSendQuery(res, querys.getEventos());
});

router2.get("/byid/:id", (req, res) => {
    const id = req.params.id;

    doAndSendQuery(res, querys.getEventoById(id));
});

//-------------------------------------------------------------------------------\\

app.use('/api/cck/tickets', router1);
app.use('/api/cck/eventos', router2);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});