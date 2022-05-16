import React from "react";
import {AnswerObject} from '../App';
// Styles
import { Wrapper, ButtonWrapper} from './QuestionCards.styles';
// SASS styles
import styles from '../Sass/style.module.scss';

type Props = {
  question: string;
  answers: string[];
  callback : (e: React.MouseEvent<HTMLButtonElement>)=>void;
  userAnswer: AnswerObject | undefined;
  questionNr : number;
  totalQuestions: number;
}

export default function QuestionCard({question,answers,callback,userAnswer,questionNr,totalQuestions}:Props) {
  return (
    <Wrapper> 
      <p className={styles.number}>
        Question {questionNr}/{totalQuestions}
      </p>
      <p className={styles.p__question} dangerouslySetInnerHTML={{__html: question}}/> 
      <div>
        {
        answers.map( (answer) => (
          <ButtonWrapper 
            correct={userAnswer?.correctAnswer === answer} 
            userClicked={userAnswer?.answer === answer}
            key={answer}>

            <button 
                value = {answer}
                disabled={!!userAnswer} //convert to boolean
                onClick={callback}> 
                <span dangerouslySetInnerHTML={{__html:answer}}/>
            </button>
          </ButtonWrapper> )) 
        }
      </div>
    </Wrapper>  
  );
}

