/* eslint-disable no-console */
/* eslint-disable no-undef */
import req from 'supertest';
import app from '../../src/app';

import connection from '../../src/database/connection';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await req(app).post('/ongs').send({
      name: 'ONG',
      email: 'contato@ong.com.br',
      whatsapp: '11123456789',
      city: 'São Paulo',
      uf: 'SP',
    });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});
