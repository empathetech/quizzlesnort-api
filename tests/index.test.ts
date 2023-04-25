import { Server } from 'http';
import app from '../src/index';
import supertest, { SuperTest } from 'supertest';

describe('Server test', () => {
  let requestWithSupertest: SuperTest<supertest.Test>;
  let server: Server;

  beforeAll((done) => {
    server = app.listen(done)
    requestWithSupertest = supertest(app);
  });

  afterAll((done) => {
    server.close(done)
  });

  it('GET /health returns a healthy response', async () => {
    const res = await requestWithSupertest.get('/health');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });
  
});
