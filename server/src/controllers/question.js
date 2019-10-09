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

export const postAQuestion=(req,res)=>{
    if (!req.body.subject) {
      return res.status(400).send({
      success:'false',
      message: 'subject is required'
      });
    } if (!req.body.description) {
      return res.status(400).send({
      success: 'false',
      message: 'description is required'
      });
    } if (!req.body.author) {
      return res.status(400).send({
        success:'false',
        message:'author is required'
      });
    }
    const question = {
      id: questions.length + 1,
      subject : req.body.subject,
      description : req.body.description
    };
    questions.push(question);
    return res.status(201).send({
      success: 'true',
      message : 'You have asked a question',
      question
    });
  };

  export const postAnAnswer = (req,res) => {
    const id = parseInt(req.params.id, 10);
    questions.map((question) => {
      if (question.id === id) {
        if (!req.body.description) {
          res.status(400).send({
            success: 'false',
            message: 'description is required'
          });
        } if (!req.body.author) {
          res.status(400).send({
            success: 'false',
            message: 'author is required'
          });
        }
        const answer = {
          id: question.answers.length + 1,
          description: req.body.description,
          author: req.body.author
        };
        question.answers.push(answer);
        return res.status(201).send({
          success:'true',
          message:'You added an answer',
          answer
        });
    }
      return res.status(404).send({
        success:'false',
        message:'question does not exist'

      });

  });
}


  // post answer for question endpiont



