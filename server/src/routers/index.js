import express from 'express';
import getAllQuestions from '../controllers/question';

const router = express.Router();

router.get('/questions', getAllQuestions);

export default router;
