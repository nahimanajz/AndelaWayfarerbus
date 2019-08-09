import tripsData from '../../data/trips';
import users from '../../data/users';
// import { jwtVerify } from '../../helpers/authorization';

const getAllTrips = (req, res) => {
  // const verifiedToken = jwtVerify(req, res);
  // const signedUser = users.find(user => user.email === verifiedToken.email);
  //console.log(signedUser.email); // good news now i can see if logged in user is an admin
  res.status(200).json({
    status: 200,
    data: tripsData
  });
};
export default getAllTrips;
