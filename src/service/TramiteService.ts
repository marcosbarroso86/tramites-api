import {Repository} from "../connection/Connection";
import {getConnection} from "typeorm";
import { Tramite } from "../model/Tramite";
import { ValidacionComercial } from "../model/ValidacionComercial";
import { ValidacionABM } from "../model/ValidacionAbm";

import HttpRequestError from "../errors/HttpRequestError";

export class TramiteService {

    constructor() {}

    public getTramite = async () => {
        const repository = await this.getRepository();
        const res = await repository.find();
        return res;
    }

    public getTramiteById = async (id:number) => {
        const tramiteRepository = await this.getRepository();
        const res = await tramiteRepository.findOne(id);
        return res;
    }


    public createTramite = async (tramite:Tramite) => {
        let response:any;
        try {
            const conexion = await Repository.getConnection();
            await getConnection(conexion.name).transaction(async transactionalEntityManager => {

                const saveTramite: any = await transactionalEntityManager.getRepository(Tramite).save(tramite);
                console.log(saveTramite.tramite, 'linea 33')

                const validacionComercial:any = {
                    tramite : saveTramite.id,
                    estado: 1
                }

                const SaveValidacionComercial = await transactionalEntityManager.getRepository(ValidacionComercial).save(validacionComercial);

                 const validacionAbm:any = {
                    tramite : saveTramite.id,
                    estado: 1
                }

                const SavevalidacionAbm = await transactionalEntityManager.getRepository(ValidacionABM).save(validacionAbm);

                }
            )
        } catch (error) {
            console.log(error);
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);
        }
        return response;
    }

    public updateTramite = async (tramiteID:number , tramite:Tramite) => {
        const tramiteRepository = await this.getRepository();
        
    console.log(tramiteID)        
        let response:any;
        try {

            response = await tramiteRepository.update(tramiteID , tramite ) ; 
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);  
        }
        return response;
    }

    private getRepository = async () => {
        const repository = await Repository.getConnection();
        return repository.getRepository(Tramite);
    }
}
