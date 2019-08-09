import Joi from 'joi';
import tripsData from '../../data/trips';
import { jwtVerify } from '../../helpers/authorization';
import users from '../../data/users';

const cancelTrip = (req, res) => {
 

  const tripToCancel = tripsData.find(fndTrip => fndTrip.trip_id === parseInt(req.params.trip_id));
  if (!tripToCancel) {
    res.status(404).json({
      status:404,
      Error: 'trip with given id is  not found'
    });
  } else {
    res.status(499).json({
      status: 499,
      message: 'trip cancelled successfully'
    });
  }
};


export default cancelTrip;
