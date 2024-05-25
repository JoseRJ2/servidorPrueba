import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import morgan from 'morgan';
import cors from 'cors';
class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    // Configura el servidor
    config(): void {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    // Define las rutas del servidor
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
    }

    // Inicia el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
