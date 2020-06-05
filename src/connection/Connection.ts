import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { Tramite } from "../model/Tramite";
import {ValidacionComercial} from "../model/ValidacionComercial";
import {ValidacionABM} from "../model/ValidacionAbm";
import { Estado } from "../model/Estado";
import { Ejecutivo } from "../model/Ejecutivo";
import { Formulario } from "../model/Formulario";


export class Repository {

    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            if(Repository.connection) {
                return Repository.connection;
            } else {

                var options:any = {
                    type: process.env.type,
                    host: process.env.host,
                    port: parseInt(process.env.port),
                    username: process.env.username,
                    password: process.env.password,
                    database : process.env.database,
                    schema : process.env.schema,
                    entities : [
                        Tramite,
                        ValidacionComercial,
                        ValidacionABM,
                        Estado,
                        Ejecutivo,
                        Formulario
                    ],
                    synchronize : false,
                    logging : true
                }
                const connection = await createConnection(options);
                Repository.connection = connection;
            }
        }
        return Repository.connection;
    }

    public static getConnection = async () => {
        const connection = await Repository.getInstace();
        return connection;

    }
}


module.exports = {
    Repository,
    
} 
