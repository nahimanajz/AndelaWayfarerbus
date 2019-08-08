import tripsData from '../../data/trips';
import { ValidateTrip } from '../../helpers/DataValidation';
import { jwtVerify } from '../../helpers/authorization';

const getSpecficTrip = (req, res) => {
    const token = jwtVerify(req,res);
    if(!token) return res.status(401).json({
      status:401,
      error:'you are not authorized to access specific trip'
    });
    const specificTrip = tripsData.find(trip => trip.trip_id === parseInt(req.params.trip_id));
   
    if (!specificTrip) {
      return res.status(404).json({
        status:404,
        Error:'Trip is not found '
      });
    } 
      return res.status(200).json({
        status:200,
        data: specificTrip 
    }    
     );
  
  };
export default getSpecficTrip;
