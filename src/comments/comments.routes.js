import { Router } from "express";
import { check } from "express-validator";
import {
    commentsDelete,
    commentsGet,
    commentsPost
} from "./comments.controller.js";
import { validateFields } from "../middlewares/validateFields.js";
import { validarJWT } from "../middlewares/validate-jwt.js";

const router = Router();

router.post(
    "/",
    [
        validarJWT,
        check("publicationsId", "ID ins´t a valid MongoDB format").isMongoId(),
        check("title", "Title is required").not().isEmpty(),
        check("comments", "Content is required").not().isEmpty(),
        validateFields,
    ],commentsPost);

router.get(
    '/',
    [
        validarJWT,
        validateFields
    ],
commentsGet);

router.delete(
    "/:id",
    [
        validarJWT,
        validateFields,
    ], commentsDelete);

export default router;