import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers';


const Results = ({ loadingNewQuestion, allAnswers, allQuestions }) => {
    return (
        <div className={`results fade-out ${loadingNewQuestion ? 'fade-out-active' : ''}`}>
            <div className="loader">
                <div className="icon" />
            </div>
            <div className="results-overlay" />
            <h1>Vous avez répondu:</h1>
            <div className="answers">
                <Answers allAnswers={allAnswers} allQuestions={allQuestions}/>
            </div>
            <div className="text-center">
                <button className="btn btn-dark">Soumettre</button>
            </div>
        </div>
    );
};


Results.propTypes = {
    loadingNewQuestion: PropTypes.bool.isRequired,
    allAnswers: PropTypes.array.isRequired,
    allQuestions: PropTypes.array.isRequired
};




export default Results;
