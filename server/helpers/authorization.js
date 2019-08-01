  import jwt from 'jsonwebtoken';
  const userInfo = require('../data/users');

 const jwtAuthorization = (req, res = null, next=null) => {
  
    return jwt.sign({ email: req.body.email },'jwtPrivateKey');
   
 }

  const jwtVerify = (req, res) => {
   const jwtHeader = req.headers['authorization'] || req.headers['Authorization'];
   if (jwtHeader) {
    const token = jwtHeader.split(' ')[1];
     const secret = process.env.JWT_SECRET;
    
       return jwt.verify(token, 'jwtPrivateKey');
    
    }  
 
 }
export {
    jwtVerify,
    jwtAuthorization
}
