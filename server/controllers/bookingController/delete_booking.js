import { jwtVerify }from '../../helpers/authorization';
import {BookingsValidation} from '../../helpers/DataValidation';
import bookingsData from '../../data/booking';

const deleteBooking=(req,res) => {
    const booking = bookingsData.find( booking => booking.booking_id === parseInt(req.params.booking_id));
    const message ='Booking deleted Sucessfully';
    
    if (!booking) return res.status(404).send('booking is not found');
    const index = bookingsData.indexOf(booking);

    bookingsData.splice(index,1);
    res.status(202).json({
      status:202,        
      message: message     
    });
  }
  export default deleteBooking;