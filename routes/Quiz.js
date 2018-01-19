const express = require("express");
const questions = require('../data/Questions');
const router = express.Router();



const onIndex = async (req, res, next) => {
    
    res.render("Quiz",{questions:questions})
}
const onPost = async (req,res,next) =>{
 
    
    const answers =req.body;
    
    let score=0;

    score = answers.reduce((acc,answer) => {
        return answer.isCorrect? acc+=1:acc+=0
    }, score);
    
    res.send({ totalScore:score,percent: (score/answers.length)*100 ,answersLenght:answers.length}  )
}




router.get("/", onIndex);
router.post("/",onPost);
module.exports =  router;
