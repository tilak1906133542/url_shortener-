import express from 'express'; 
import { createUrl, getUrl } from '../controllers/urlController.mjs';

const router = express.Router();

router.post('/create', createUrl);
router.get('/:shortUrl', getUrl);

export default router;

