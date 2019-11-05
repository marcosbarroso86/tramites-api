import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { Employee } from "../model/Employee";

export class Repository {

    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            if(Repository.connection) {
                return Repository.connection;
            } else {
                const connection = await createConnection({
                    type: "oracle",
                    host: "localhost",
                    port: 1521,
                    username: "SYSTEM",
                    password: "Welcome_1",
                    sid: 'ORCL18',
                    database: "COMPANY",
                    entities: [
                        Employee
                    ],
                    synchronize: false,
                    logging: true,
                    
                });
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

