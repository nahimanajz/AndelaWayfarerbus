import { jwtVerify }from '../../helpers/authorization';
import {BookingsValidation} from '../../helpers/DataValidation';
import bookingsData from '../../data/booking';

 const bookAseat = (req,res) => {
 jwtVerify(req,res);   
 const { error } = BookingsValidation(req.body);
if (error) return res.status(400).send(error.details[0].message);
const new_booking = {
booking_id: bookingsData.length + 1,
bus_licence_number:req.body.bus_licence_number,
trip_date:req.body.trip_date,
first_name:req.body.first_name,
last_name:req.body.last_name,
user_email:req.body.user_email
};

bookingsData.push(new_booking);

res.status(201).json({
status:'success',
data : new_booking
});
}
export default bookAseat;
