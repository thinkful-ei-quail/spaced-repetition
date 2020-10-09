import React from 'react'
import feedbackStyles from './Feedback.module.css'

function renderFeedback(feedback) {
    if (feedback === true) {
        return <h2>You were correct! :D</h2>
    }
    return <h2>Good try, but not quite right :(</h2>
}

export default function Feedback(props) {
       return (
           <div>
               {renderFeedback(props.isCorrect)}
               <div className='DisplayFeedback'>
               <p>The correct translation for {props.word} was {props.answer} and you chose {props.guess}!</p>
               </div>
               <div className='DisplayScore'>
               <p>Your total score is: {props.totalScore}</p>
               </div>
               <button>Try another word!</button>
           </div>
       )
}