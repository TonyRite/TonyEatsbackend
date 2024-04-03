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


