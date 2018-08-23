import questions from '../models/question';

const getAllQuestions = (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'questions retrieved successfully',
    questions
  });
};

export default getAllQuestions;
