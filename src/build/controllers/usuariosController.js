"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosController = void 0;
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default;
            const respuesta = yield connection.query('SELECT * FROM usuarios');
            res.json(respuesta);
        });
    }
    listOneContactos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const respuesta = yield connection.query('SELECT contactos.id,contactos.nombre,contactos.correo,contactos.telefono FROM contactos where contactos.id_usuario = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const respuesta = yield connection.query('SELECT * FROM usuarios WHERE id = ?', [id]);
            if (respuesta.length > 0) {
                res.json(respuesta[0]);
                return;
            }
            res.status(404).json({ 'mensaje': 'usuario no encontrado' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default;
            const resp = yield connection.query('INSERT INTO usuarios set ?', [req.body]);
            res.json(resp);
        });
    }
    createContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default;
            const resp = yield connection.query('INSERT INTO contactos set ?', [req.body]);
            res.json(resp);
        });
    }
    updateContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const resp = yield connection.query('UPDATE contactos SET nombre = ?, correo = ?, telefono = ?  WHERE contactos.id = ? ', [req.body.nombre, req.body.correo, req.body.telefono, id]);
            res.json(resp);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const resp = yield connection.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
            res.json(resp);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const resp = yield connection.query(`DELETE FROM usuarios WHERE id = ${id}`);
            res.json(resp);
        });
    }
    deleteContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const connection = yield database_1.default;
            const resp = yield connection.query(`DELETE FROM contactos WHERE id = ${id}`);
            res.json(resp);
        });
    }
}
exports.usuariosController = new UsuariosController();
