import React, { Component } from 'react';
import data from './data/Data';

import Question from './components/Question';

import logo from './logo.svg';

import './App.scss';
import "./scss/test.scss";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      allQuestions: data.allQuestions,
      currentQuestion: data.allQuestions[0],
      progress: 0,
      allAnswers: []
    }

  }

  onSelectAnswer = (answer) => {
    console.log('Answer Selected : ' + answer);
  }

  render() {
    return (
      <div>

        {/* Header - start */}
        <header>
          <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/images/plane.svg" />
        </header>
        {/* Header - end */}

        {/* Content - start */}
        <div className={`content`}>

          {/* Progress - start */}
          <div className="progress-container">
            <div className="progress-label">1 of 5 answered</div>
            <div className="progress">
              <div className="progress-bar" style={{ 'width': `20%` }}>
                <span className="sr-only">20% Complete</span>
              </div>
            </div>
          </div>
          {/* Progress - end */}

          {/* Question - start */}
          <Question 
            currentQuestion={this.state.currentQuestion}
            onSelectAnswer={this.onSelectAnswer}
          />
          {/* Question - end */}

          {/* Results - start */}
          <div className="results">
            <div className="loader"><div className="icon"></div></div>
            <div className="results-overlay"></div>
            <h1>Here are your answers:</h1>
            <div className="answers">
              <ol>
                <li>What is the best city in the world? <br /><strong>Melbourne</strong></li>
              </ol>
            </div>
            <div className="text-center">
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
          {/* Results - end */}

        </div>
        {/* Content - end */}

        {/* Navigation - start */}
        <div className={`navigation text-center is-active`}>
          <button className={`arrow`}>
            <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-left-arrow.svg" />
          </button>
          <button disabled className={`arrow is-disabled`}>
            <img src="https://ihatetomatoes.net/react-tutorials/abc-quiz/fonts/navigation-right-arrow.svg" />
          </button>
        </div>
        {/* Navigation - end */}

      </div>
    );
  }
}

export default App;