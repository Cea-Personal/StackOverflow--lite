import questions from '../models/question';

export const getAllQuestions = (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'questions retrieved successfully',
    questions
  });
};
export const getAQuestion = (req, res) => {
  const id = parseInt(req.params.id, 10);
  questions.map((question) => {
    if (question.id === id) {
        res.status(200).send({
        success: 'true',
        message: 'question retrieved successfully',
        question
      });
    }
      return res.status(404).send({
      success:  'false',
      message : 'question does not exist'
    });
  });
};

