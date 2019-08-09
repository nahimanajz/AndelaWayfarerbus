import { jwtAuthorization } from '../../helpers/authorization';
import users from '../../data/users';
import DataValidation from '../../helpers/DataValidation';

const userSignin = (req, res) => {
  const token = jwtAuthorization(req, res);
  const { error } = DataValidation.validateUserSignin(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const signedUser = users.find(user => user.email === req.body.email && user.password === req.body.password);

  if (!signedUser) {
 return res.status(401).json({
    status: 401,
    message: 'Invalid user credentials...'
  });
  }
  signedUser.token = token;
  return res.status(200).json({
    status: 200,
    data: signedUser
  });
};
export default userSignin;
