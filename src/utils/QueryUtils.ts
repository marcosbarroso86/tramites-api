
import { Request } from "express";
import { Repository, SelectQueryBuilder } from "typeorm";
import { Tramite } from "../model/Tramite";

export default class QueryUtils {

static obtenerFiltros = (req:Request):any => {
    const { query } = req;
    const tramite:any = {};

    if ('ejecutivo' in query) tramite.idEjecutivoVenta = query.ejecutivo;

    return tramite;
}

public static construirCondicionesTamite = (query:SelectQueryBuilder<any> ,  queryParam:any ) => {
    
    if ('ejecutivo' in queryParam) {
            query = query.andWhere("Tramite.ejecutivo = :ejecutivo", {ejecutivo: queryParam.ejecutivo })
        }

        return query;
    }

}