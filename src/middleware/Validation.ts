import {body, validationResult} from "express-validator";
import {Request,Response,NextFunction } from "express";

const handleValidationErrors = async(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    next();
};
export const validateMyUserRequest =[
    body("name").isString().notEmpty().withMessage("Body must be String"),
    body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("AddressLine1 must be String"),
    body("city").isString().notEmpty().withMessage("City must be String"),
    body("country").isString().notEmpty().withMessage("Country must be String"),
    handleValidationErrors,
];

export const validateMyRestaurantRequest = [
    body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("deliveryPrice")
    .isFloat({min:0})
    .withMessage("DeliveryPrice must be a positive number"),
    body("estimatedDeliveryTime")
    .isInt({min:0})
    .withMessage("Estimated delivery time must be a positive integer"),
    body("cuisines")
    .isArray()
    .withMessage("Cuisnes must be an array")
    .not()
    .isEmpty()
    .withMessage("Cusines array can not be empty"),
    body("menuItems").isArray().withMessage("MenuItems must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
    body("menuItems.*.price").isFloat({min:0}).withMessage("Menu item price is required and must be a positive number"),
    handleValidationErrors
];
