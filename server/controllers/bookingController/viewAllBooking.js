import { jwtVerify } from '../../helpers/authorization';
import bookingsData from '../../data/booking';
import users from '../../data/users';

const viewAllBookings = (req, res) => {
  res.status(200).json({
    status: 200,
    data: bookingsData
  });
};
export default viewAllBookings;
