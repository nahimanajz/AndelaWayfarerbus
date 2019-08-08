/* eslint-disable import/named */
import jwt from 'jsonwebtoken';
import { tripsData } from '../../data/trips';
import DataValidation from '../../helpers/DataValidation';
import { jwtVerify } from '../../helpers/authorization';
import users from '../../data/users';

const createTrip = (req, res) => {
const verifiedToken = jwtVerify(req, res);
  const signedUser = users.find(user => user.email === verifiedToken.email);
  if (signedUser.isAdmin === true) {
    const token = jwt.sign({ token }, 'jwtPrivateToken');
    const { error } = DataValidation.validateTrip(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const new_trip = {
      trip_id: tripsData.length + 1,
      seating_capacity: req.body.seating_capacity,
      fare: req.body.fare,
      origin: req.body.origin,
      destination: req.body.destination,
      trip_date: req.body.trip_date,
    };
    tripsData.push(new_trip);
    new_trip.token = token;
    res.status(201).json({
      status: 201,
      data: new_trip
    });
  }
};
export default createTrip;
