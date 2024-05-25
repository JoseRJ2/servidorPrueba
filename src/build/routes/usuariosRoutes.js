"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/create', usuariosController_1.usuariosController.create);
        this.router.get('/', usuariosController_1.usuariosController.list);
        this.router.delete('/delete/:id', usuariosController_1.usuariosController.delete);
        this.router.put('/update/:id', usuariosController_1.usuariosController.update);
        this.router.get('/:id', usuariosController_1.usuariosController.listOne);
        this.router.get('/contactos/:id', usuariosController_1.usuariosController.listOneContactos);
        this.router.post('/contactos/create', usuariosController_1.usuariosController.createContacto);
        this.router.delete('/contactos/delete/:id', usuariosController_1.usuariosController.deleteContacto);
        this.router.put('/contactos/update/:id', usuariosController_1.usuariosController.updateContacto);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
