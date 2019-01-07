import React from 'react';
import PropTypes from 'prop-types';


const Answers = ({ allQuestions, allAnswers}) => {
    return (
        <ol>
            <li>
                Quel est le meilleur journaliste au Temps selon vous? <br />
                <strong>Olivier Perrin</strong>
            </li>
        </ol>
    );
};


Answers.propTypes = {
    allAnswers: PropTypes.array.isRequired,
    allQuestions: PropTypes.array.isRequired
};


export default Answers;
