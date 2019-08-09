/* eslint-disable import/named */
import jwt from 'jsonwebtoken';
import tripsData  from '../../data/trips';
import DataValidation from '../../helpers/DataValidation';
import { jwtVerify } from '../../helpers/authorization';
import users from '../../data/users';

const createTrip = (req, res) => {
  const token = jwt.sign('date','jwtPrivateKey');
  const { error } = DataValidation.validateTrip(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newTrip = {
    trip_id: tripsData.length + 1,
    seating_capacity: req.body.seating_capacity,
    fare: req.body.fare,
    origin: req.body.origin,
    destination: req.body.destination,
    trip_date: req.body.trip_date
  };
  tripsData.push(newTrip);
  newTrip.token = token;
  res.status(201).json({
    status: 201,
    data: newTrip
  });

};
export default createTrip;
