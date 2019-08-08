import { jwtVerify }from '../../helpers/authorization';
import bookingsData from '../../data/booking';
import users from '../../data/users';

const viewAllBookings = (req,res) => {
  const verifiedToken = jwtVerify(req,res);
  const signedUser = users.find(user => user.email === verifiedToken.email);
  console.log(signedUser.isAdmin);
  if(signedUser.isAdmin === true) {    
    return res.status(200).json({      
      status: 200,
      data: bookingsData
    });
} else {
    return res.status(200).json({      
        status: 403,
        Error: "you are not administrator"
      });
}
}
export default viewAllBookings;