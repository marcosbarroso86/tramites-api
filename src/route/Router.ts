import { TramiteController } from "../controller/TramiteController";

export class Router {

    private routes: any;
    private tramiteController:TramiteController;

    constructor(){
        this.tramiteController = new TramiteController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/tramites')
        .get(this.tramiteController.getTramites);

        this.routes.route('/tramites')
        .post(this.tramiteController.createTramite);

        this.routes.route('/tramites/:id')
        .get(this.tramiteController.getTramiteById)
        .delete(this.tramiteController.deleteTramite)
        .put(this.tramiteController.updateTramite)
    }

    public getRoutes(){
        return this.routes;
    }

}

