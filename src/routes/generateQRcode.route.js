import express from 'express';
import { generateQRcode } from '../controllers/QRcodegen.js';
const router = express.Router();

export const genRoute = router.post('/generateqrcode', generateQRcode);

export default genRoute;
