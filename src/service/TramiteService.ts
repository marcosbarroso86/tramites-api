import {Repository} from "../connection/Connection";
import {getConnection} from "typeorm";
import { Tramite } from "../model/Tramite";
import { ValidacionComercial } from "../model/ValidacionComercial";
import HttpRequestError from "../errors/HttpRequestError";

export class TramiteService {

    constructor() {}

    public getTramite = async () => {
        const repository = await this.getRepository();
        const res = await repository.find();
        return res;
    }

    public getTramiteById = async (tramiteID:number) => {
        const tramiteRepository = await this.getRepository();
        const res = await tramiteRepository.findOne(tramiteID);
        return res;
    }

    public createTramite = async (tramite:Tramite) => {
        const tramiteRepository = await this.getRepository();
        let response:any;
        try {
            response = await tramiteRepository.save(tramite);
                     console.log('dddddd')
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error+ "lpm");
        }
        return response;
    }


    public creatTramite = async (tramite:Tramite) => {
        let response:any;
        try {
            const conexion = await Repository.getConnection();
            await getConnection(conexion.name).transaction(async transactionalEntityManager => {

                const saveTramite = await transactionalEntityManager.getRepository(Tramite).save(tramite);
                const validacionComercial:any = {
                    tramite : saveTramite,
                    estado: 1
                }

                console.log(validacionComercial);
                const SaveValidacionComercial = await transactionalEntityManager.getRepository(ValidacionComercial).save(validacionComercial);

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
        let response:any;
        try {
            response = await tramiteRepository.update(tramiteID , tramite ) ; 
        } catch (error) {
            throw new HttpRequestError(HttpRequestError.ERROR_TYPE + " " + error);  
        }
        return response;
    }

    public deleteTramite = async (tramiteID:number) => {
        const tramiteRepository = await this.getRepository();
        let response:any;
        try {
            response = await tramiteRepository.delete(tramiteID);
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
