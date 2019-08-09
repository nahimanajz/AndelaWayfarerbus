import express from 'express';
import createAccount from '../controllers/usersController/signup';
import userSignin from '../controllers/usersController/signin';
import viewAllBookings from '../controllers/bookingController/viewAllBooking';
import bookAseat from '../controllers/bookingController/bookAseat';
import deleteBooking from '../controllers/bookingController/delete_booking';
import cancelTrip from '../controllers/tripsController/cancelTrip';
import createTrip from '../controllers/tripsController/createTrip';
import getSpecficTrip from '../controllers/tripsController/getSpecificTrip';
import getAllTrips from '../controllers/tripsController/getAllTrips';
import authority from '../middlewares/authority';
import admin from '../middlewares/admin';
const router = express.Router();

router.post('/auth/signup', createAccount);
router.post('/auth/signin', userSignin);
router.post('/trips', [authority, admin], createTrip);
router.get('/trips/:trip_id', authority,getSpecficTrip);
router.get('/trips', authority,getAllTrips);

router.patch('/trips/:trip_id/cancel',authority,cancelTrip);
router.post('/bookings', authority, bookAseat);
router.get('/bookings',authority, viewAllBookings);
router.delete('/bookings/:booking_id', authority, deleteBooking);

export default router;
