import {Request, Response} from "express";
import { TramiteService } from "../service/TramiteService";
import { Tramite } from "../model/Tramite";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";


export class TramiteController {

    private tramiteService: TramiteService;
    
    constructor() {
        this.tramiteService = new TramiteService();
    }

    public getTramiteById = (req: Request , res: Response ) => {
        let tramiteId:number =  parseInt(req.params.id);
        this.tramiteService.getTramiteById(tramiteId)
        .then((tramite:Tramite) => {
            HTTPResponseHandler.sendSuccess(res , tramite);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        });
    }


    public getTramites = (req: Request , res: Response ) => {
        //var query = require('url').parse(req.url,true).query;
        
        let filtros =  req.query;
        console.log(filtros, 'filtro req.query')
        this.tramiteService.getTramites(filtros)
        .then((tramite : any) => {
            HTTPResponseHandler.sendSuccess(res , tramite);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)
        });
    }

    public createTramite = (req: Request , res: Response ) => {
        let tramite:Tramite = req.body;
        this.tramiteService.createTramite(tramite)
        .then((response:any) => {
            HTTPResponseHandler.sendCreate(res);
        })
        .catch((err) => {
            HTTPResponseHandler.sendInternalError(res , err , null);
        });
    }


    public updateTramite = (req: Request , res : Response) => {
        let tramiteID:number = parseInt(req.params.id);
        let tramite: any = req.body;
        this.tramiteService.updateTramite(tramiteID , tramite)
        .then((response:any) => {
            HTTPResponseHandler.sendEmpty(res);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null)  
        });
    }
}