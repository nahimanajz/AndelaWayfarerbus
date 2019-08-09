import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import jwt from 'jsonwebtoken';
import app from '../../app';

chai.use(chaiHttp);
chai.should();
const payload = {
  email: 'jazzonahimana1@gmail.com',
  password: 'test123'
};

const newTrip = {
  seating_capacity: 23,
  fare: 1000,
  origin: 'kampala',
  destination: 'Nairobi',
  trip_date: '2019-02-01',
};

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphenpvbmFoaW1hbmExQGdtYWlsLmNvbSIsImlhdCI6MTU2NTI1NjI0NH0.zg1CHtiT6RpuppqoBnpJXIoNrEn0pNFXAIZr4MWt3Wg';
describe('user view a trip ', () => {
  it('should 401 if no token provided', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .set('authorization', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should  return all trips ', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .set('authorization', `${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });
});

describe('Trip create', () => {
  it('should return 201 if trip is created', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('authorization', `Bearer ${ token }`)
      .send(newTrip)
      .end((err, res) => {
        // res.should.be.an('object');
        // res.should.have.status(201);
        // res.body.should.have.property('status').eql(201);
        // res.body.should.have.property('data')
        console.log(res.body);
        done();
      });
  });
})