import jwt from 'jsonwebtoken';
import chai from 'chai';
import chaiHttp from 'chai-http';
import assert from 'assert';
import app from '../../app';

const { expect } = chai;
chai.use(chaiHttp);
chai.should();


const newBooking = {
  bus_licence_number: 'RAD2019',
  trip_date: '2019-12-32',
  first_name: 'nahimana',
  last_name: 'janvier',
  user_email: 'jazzonahimana'
};
const userLogged = {
  email: 'jazzonahimanayu1@gmail.com',
  password: 'test123'
};
const token = jwt.sign(userLogged, 'jwtPrivateKey');

describe('book', () => {
  it('should return 201 if new book is created', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('authorization', token)
      .send(newBooking)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return 200 if new bookings are viewed', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('authorization', token)

      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return 202 if new specific booking is deleted', (done) => {
    chai.request(app)
      .delete('/api/v1/bookings/1')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(202);
        done();
      });
  });
  it('should return 404 if new specific booking is deleted is string', (done) => {
    chai.request(app)
      .delete('/api/v1/bookings/key')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
