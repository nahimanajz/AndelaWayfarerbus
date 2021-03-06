 import {jwtAuthorization} from '../helpers/authorization';
 import  jwt  from 'jsonwebtoken';

 import users from '../data/users';

 import  users  from '../data/users';

 import {validateUserSignup, validateUserSignin } from '../helpers/DataValidation';

 const usersController = {
   
    userSignin: (req, res) => {
      const token = jwtAuthorization(req, res);
      const { error } = validateUserSignin(req.body);
      if(error) return res.status(400).send(error.details[0].message);       
      const signedUser = users.find(user => user.email === req.body.email && user.password === req.body.password);
             
      if(!signedUser) return res.status(400).send('Invalid user credentials...');
      
      signedUser.token = token;
      return res.status(200).json({
       status: res.statusCode,
       status:'success',
             data:signedUser,
     });
  },
  createAccount: (req, res)=> {

      const token = jwtAuthorization(req, res);
      const { error } = validateUserSignup(req.body);
      if( error) return res.status(400).send(error.details[0].message);
      const new_user = {          
            email:req.body.email,
            password:req.body.password,
            first_name:req.body.first_name,
            last_name:req.body.last_name
            
        }
        users.push(new_user);
        new_user.token = token;
      return res.status(201).json({
        status: 'success',
        data: new_user
        
      });
    }     

  }       };
  export default usersController;

