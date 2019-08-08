import Joi from 'joi';
import tripsData from '../../data/trips';
import { jwtVerify } from '../../helpers/authorization';
import users from '../../data/users';

const cancelTrip = (req, res) => {
  // jwtVerify(req, res);
  const verifiedToken = jwtVerify(req, res);
  const signedUser = users.find(user => user.email === verifiedToken.email);
  if (!signedUser.isAdmin === true) {
    res.status(403).json({
      status: 403,
      Error: 'you are not authorized'
    });
  }

  const tripToCancel = tripsData.find(fndTrip => fndTrip.trip_id === parseInt(req.params.trip_id));
  // const schema = {
  //   trip_id: Joi.required()
  // };
  // const { error } = Joi.validate(tripToCancel, schema);
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }
  if (!tripToCancel) {
    res.status(404).json({
      status: 'error',
      message: 'trip with given id is  not found'
    });
  } else {
    res.status(200).json({
      status: 200,
      message: 'trip cancelled successfully'
    });
  }
};


export default cancelTrip;
