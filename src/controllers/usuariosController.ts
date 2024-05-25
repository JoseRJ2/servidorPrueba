import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

    public async list(req: Request, res: Response): Promise<void> {
        const connection = await pool; 
        const respuesta = await connection.query('SELECT * FROM usuarios');
        res.json(respuesta);
    }

    public async listOneContactos(req: Request, res: Response): Promise<void> {
        const  id  = req.params.id;
        const connection = await pool; 
        const respuesta = await connection.query('SELECT contactos.id,contactos.nombre,contactos.correo,contactos.telefono FROM contactos where contactos.id_usuario = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta);
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }
   

    public async listOne(req: Request, res: Response): Promise<void> {
        const  id  = req.params.id;
        const connection = await pool; 
        const respuesta = await connection.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if (respuesta.length > 0) {
            res.json(respuesta[0]);
            return;
        }
        res.status(404).json({ 'mensaje': 'usuario no encontrado' });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const connection = await pool; 
        const resp = await connection.query('INSERT INTO usuarios set ?', [req.body]);
        res.json(resp);
    }

    public async createContacto(req: Request, res: Response): Promise<void> {
        const connection = await pool; 
        const resp = await connection.query('INSERT INTO contactos set ?', [req.body]);
        res.json(resp);
    }

    public async updateContacto(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const connection = await pool; 
        const resp = await connection.query('UPDATE contactos SET nombre = ?, correo = ?, telefono = ?  WHERE contactos.id = ? ', [req.body.nombre,req.body.correo,req.body.telefono, id]);
        res.json(resp);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const connection = await pool; 
        const resp = await connection.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
        res.json(resp);
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const  id  = req.params.id;
        const connection = await pool; 
        const resp = await connection.query(`DELETE FROM usuarios WHERE id = ${id}`);
        res.json(resp);
    }

    public async deleteContacto(req: Request, res: Response): Promise<void> {
        const  id  = req.params.id;
        const connection = await pool; 
        const resp = await connection.query(`DELETE FROM contactos WHERE id = ${id}`);
        res.json(resp);
    }
}

export const usuariosController = new UsuariosController();
