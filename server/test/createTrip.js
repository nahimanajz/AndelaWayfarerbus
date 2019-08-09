import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../app';

chai.use(chaiHttp);
chai.should();
const payload = {
  email: 'jazzonahimana@gmail.com',
};
const token = jwt.sign(payload, 'jwtPrivateKey', { expiresIn: '1d' });
console.log(token);
describe('user post a trip ', () => {

  it('should not be able to post if no token provided', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .send({
        sitting_capacity: 25,
        origin: 'kigali',
        destination: 'Gisenyi',
        trip_date: '10/9/2019',
        fare: 40000,
        status: 'active'
      })
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
  it('should  be able to post if token is given ', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('authorization', `Bearer ${token}`)
      .send({
        sitting_capacity: 39,
        origin: 'kigali',
        destination: 'gatuna',
        trip_date: '10/9/2019',
        fare: 56000,
        status: 'active',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.an('object');
        res.should.have.property('status').eql(201);
        res.body.should.have.property('data');
        done();

      });
  });
});
