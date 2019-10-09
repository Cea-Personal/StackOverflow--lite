import express from 'express';
import {getAllQuestions, getAQuestion,postAQuestion,postAnAnswer} from '../controllers/question';

const router = express.Router();

router.get('/questions', getAllQuestions);
router.get('/questions/:id', getAQuestion);
router.post('/questions', postAQuestion);
router.post('/questions/:id/answers', postAnAnswer);

export default router;
