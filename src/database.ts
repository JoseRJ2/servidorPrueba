import mysql from 'promise-mysql';
import keys from './keys';

async function connectToDatabase() {
    try {
        const pool = await mysql.createPool(keys.database);
        const connection = await pool.getConnection();
        connection.release(); 
        console.log('la base de datos esta conectada');
        return pool;
    } catch (error) {
        console.error('fallo conectar a la base de datos', error);
        throw error;
    }
}

const pool = connectToDatabase();
export default pool;
