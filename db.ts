import { SqlClient } from "msnodesqlv8";
import { config } from "./configs";

const sql: SqlClient = require("msnodesqlv8");


const connectionString =
    `Server=${config.server};` +
    `User Id=${config.user};` +
    `Password=${config.password};` +
    `Database=${config.database_dev};` +
    `Trusted_Connection=Yes;` +
    `Driver={SQL Server Native Client 11.0}`;


const getQuery = (res, query: string, rescode = false) => {
        sql.query(connectionString, query, (e, data) => {
            if (rescode)
                res.status(200);
            else
                res.json(data);
        })};

export const doAndSendQuery = getQuery;