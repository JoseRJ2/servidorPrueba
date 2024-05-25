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
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield promise_mysql_1.default.createPool(keys_1.default.database);
            const connection = yield pool.getConnection();
            connection.release();
            console.log('la base de datos esta conectada');
            return pool;
        }
        catch (error) {
            console.error('fallo conectar a la base de datos', error);
            throw error;
        }
    });
}
const pool = connectToDatabase();
exports.default = pool;
