const express = require('express');
const router = express.Router();
const userData = require('../data/users');


router.get('/', async (req, res) => {
   const AuthCookie = req.cookies.AuthCookie;

   try {
      //userdata not iterable
      for (let user of userData.users) {
         if (user.username === AuthCookie) {
            res.render('private', {
               title: 'User details view',
               user: user
            });
            return;
         }
      }
      throw 'Invalid Cookie';
   } catch (err) {
      console.log('Fuck', err);
      res.status(403).render('error', {
         title: 'Error: redirected to login',
         description: err
      });
   }
});

module.exports = router;
