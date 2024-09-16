import express from 'express';
import { param } from 'express-validator';
import Restaurant from '../modals/restaurant';
import MyRestaurantController from '../controllers/MyRestaurantController';
import RestaurantController from '../controllers/RestaurantController';

const router = express.Router();

router.get(
    "/:restaurantId",
    param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId parameter must be a valid string"),
    RestaurantController.getRestaurant
);

router.get(
    '/search/:city',
    param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City is required"),
    RestaurantController.searchRestaurant
);

export default router;