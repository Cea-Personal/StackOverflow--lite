import express from 'express';
import {getAllQuestions, getAQuestion} from '../controllers/question';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:id', getAQuestion);

export default router;
