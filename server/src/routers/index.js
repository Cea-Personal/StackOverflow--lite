import express from 'express';
import {getAllQuestions, getAQuestion,postAQuestion} from '../controllers/question';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:id', getAQuestion);
router.post('/questions',postAQuestion);

export default router;
