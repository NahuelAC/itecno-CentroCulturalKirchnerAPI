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

router.put("/show/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaShow(idEntradas, deviceid));
});

router.put("/preshow/:idEntradas/:deviceid", (req, res) => {
    const idEntradas = req.params.idEntradas;
    const deviceid = req.params.deviceid;

    putAndSendQuery(res, querys.putEntradaPreshow(idEntradas, deviceid));
});

//-------------------------------------------------------------------------------\\

app.use('/api/cck/tickets', router);


app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`);
});