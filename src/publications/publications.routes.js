import { Router } from "express";
import { validateFields } from "../middlewares/validateFields.js";
import { validarJWT } from "../middlewares/validate-jwt.js";
import { publicationsDelete, publicationsGet, publicationsPost } from "./publications.controller.js";

const router = Router();

router.post(
    '/',
    [
        validarJWT,
        validateFields
    ],
publicationsPost);

router.get(
    '/',
    [
        validarJWT,
        validateFields
    ],
publicationsGet);

router.delete(
    '/:id',
    [
        validarJWT,
        validateFields
    ],
publicationsDelete);

export default router;