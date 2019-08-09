import jwt from 'jsonwebtoken'
import users from '../../data/users';
// import { jwtAuthorization } from '../../helpers/authorization';
import DataValidation from '../../helpers/DataValidation';

export const createAccount = (req, res) => {
  const payload = req.body;
  const token = jwt.sign(payload, 'jwtPrivateKey');

  const checkEmail = users.find(user => user.email === req.body.email);
  if (checkEmail) {
    return res.status(409).json({
      status: 409,
      error: 'This email has been taken try another one please'
    });
  }
  const { error } = DataValidation.validateUserSignup(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const new_user = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    isAdmin: req.body.isAdmin
  };
  users.push(new_user);
  new_user.token = token;
  return res.status(201).json({
    status: 201,
    data: new_user
  });
};
export default createAccount;
