import { Router } from "express";
import { validateFields } from "../middlewares/validateFields.js";
import { validarJWT } from "../middlewares/validate-jwt.js";
import { publicationsPost } from "./publications.controller.js";

const router = Router();

router.post(
    '/new',
    [
        validarJWT,
        validateFields
    ], publicationsPost);

export default router;