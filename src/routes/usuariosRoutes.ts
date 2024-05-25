import { Router } from 'express';
import { usuariosController} from '../controllers/usuariosController';

class UsuariosRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/create', usuariosController.create);
        this.router.get('/', usuariosController.list);
        this.router.delete('/delete/:id', usuariosController.delete);
        this.router.put('/update/:id', usuariosController.update);
        this.router.get('/:id', usuariosController.listOne);
        this.router.get('/contactos/:id', usuariosController.listOneContactos);
        this.router.post('/contactos/create',usuariosController.createContacto);
        this.router.delete('/contactos/delete/:id',usuariosController.deleteContacto);
        this.router.put('/contactos/update/:id',usuariosController.updateContacto);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
