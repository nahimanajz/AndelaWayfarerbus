
import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import app from '../../app';

chai.use(chaiHttp);
chai.should();
const loggedUser = [
  {
    email: 'yokohama@gmail.com',
    password: 'test123',
    
  }];
describe('user sign in', () => {
  describe('POST /', () => {
    it('should return 401 if user is unauthorized', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(loggedUser[0])
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.an('object');
          res.body.should.have.property('status').eql(401);
          res.body.should.have.property('message');
          console.log(res.body);
          done();
        });
    });
    it('should return status code of 200 if user exist', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(loggedUser[0])
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an('object');
          res.body.should.have.property('status').eql(200);
          res.body.should.have.property('data');
          console.log(res.body);
          done();
              });
    });
});
});

