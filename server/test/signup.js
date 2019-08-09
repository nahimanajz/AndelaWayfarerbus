import chai from 'chai';
import chaiHttp from 'chai-http';
import assert from 'assert';
import app from '../../app';


const { expect } = chai;
chai.use(chaiHttp);
chai.should();

const user = {
  email: 'jazzonahimanayu1@gmail.com',
  password: 'test123',
  first_name: 'janvier',
  last_name: 'nahimana',
  isAdmin: false
};
const userLogged = {
  email: 'jazzonahimanayu1@gmail.com',
  password: 'test123'
};

describe('users', () => {
  it('should return 201 if account is created', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return 200 if use exist', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userLogged)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
