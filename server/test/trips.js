import jwt from 'jsonwebtoken';
import chai from 'chai';
import chaiHttp from 'chai-http';
import assert from 'assert';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();


const newTrip = {
  seating_capacity: 23,
  fare: 1000.0,
  origin: 'kampala',
  destination: 'Nairobi',
  trip_date: '2019-09-01'
};
const badTrip = {
  seating_capacity: 23,
  fare: 1000.0,
  origin: 'kampala',
  destination: 'Nairobi',
  trip_date: '2019-99-01'
};
const userLogged = {
  email: 'jazzonahimanayu1@gmail.com',
  password: 'test123'
};
const token = jwt.sign(userLogged, 'jwtPrivateKey');

describe('Trips', () => {
  it('should return 201 if new trips is created', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('authorization', token)
      .send(newTrip)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return 200 if trips are retrieved', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .set('authorization', token)
      .send(newTrip)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return 400 bad request if date is bad formated', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('authorization', token)
      .send(badTrip)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return 200 if trip is found', (done) => {
    chai.request(app)
      .get('/api/v1/trips/1')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return 499 for a cancelled trip', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/1/cancel')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(499);
        done();
      });
  });
  it('should return 404 bad request if user enter invalid trip to cancel', (done) => {
    chai.request(app)
      .patch('/api/v1/trips/:dsk:/cancel')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it('it should return 500 if user visit invalid url', (done) => {
    chai.request(app)
      .get('/api/v1/trips/:dsk:/cancel')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
