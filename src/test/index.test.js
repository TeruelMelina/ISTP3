const app = require('../index');
const request = require('supertest');

describe('GET a ruta principal', () => {
    
    it('Solicitud de datos', async () => {
       await request(app)
            .get('/')
            .expect('Esto es una prueba para IC!'); 
    });
})