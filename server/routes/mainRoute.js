 import express from 'express';
// const express = require('express');
// const usersController = require('../controllers/userController');
//const tripsController = require('../controllers/tripsController');
// const bookingController = require('../controllers/bookingController');
import usersController from "../controllers/userController";
import bookingController from '../controllers/bookingController';
import tripsController from '../controllers/tripsController';
const router = express.Router();

router.post('/auth/signup', usersController.createAccount);
router.post('/auth/signin', usersController.userSignin);
 router.post('/trips', tripsController.createTrip);
 router.get('/trips/:trip_id', tripsController.getSpecficTrip);
 router.get('/trips', tripsController.getAllTrips);
 router.patch('/trips/:trip_id/cancel',tripsController.cancelTrip);
 router.post('/bookings',bookingController.bookAseat);
 router.get('/bookings',bookingController.view_bookings);
 router.delete('/bookings/:booking_id',bookingController.deleteBooking);

export default router;
//module.exports = router;
// (title): body
// ex: (signuo):""