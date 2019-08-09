import tripsData from '../../data/trips';
import { ValidateTrip } from '../../helpers/DataValidation';
import { jwtVerify } from '../../helpers/authorization';

const getSpecficTrip = (req, res) => {
const specificTrip = tripsData.find(trip => trip.trip_id === parseInt(req.params.trip_id));
  if (!specificTrip) {
    return res.status(404).json({
      status: 404,
      Error: 'Trip is not found '
    });
  }
  return res.status(200).json({
    status: 200,
    data: specificTrip
  }
  );
};
export default getSpecficTrip;
