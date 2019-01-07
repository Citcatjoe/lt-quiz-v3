import React, { Component } from 'react';
import data from './data/Data';

import Question from './components/Question';
import Results from "./components/Results";

import logo from './logo.svg';

import './App.scss';
import "./scss/test.scss";

import glyph00 from "./img/glyph-00.svg"; 
import quizBg from "./img/quiz-bg.jpg"; 

// const quizBgStyle = {
//   backgroundImage: "url(" + quizBg + ")",
//   backgroundPosition: "center center",
//   backgroundSize: "cover"
// };

// document.body.classList.add("no-scroll");

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      allQuestions: data.allQuestions,
      currentQuestion: data.allQuestions[0],
      progress: 0,
      allAnswers: [],
      loadingNewQuestion: false,
      showResults: false
    }

  }

  onSelectAnswer = (answer) => {
    console.log('Answer Selected : ' + answer);

    const {allAnswers} = this.state;

    this.setState({
      allAnswers: [...allAnswers, answer]
    }, this.goToNextQuestion())
  }

  goToNextQuestion = () => {
    const { progress, allQuestions } = this.state;
    console.log('Go to the next question after the state is updated');

    this.setState({
      loadingNewQuestion: true
    })
    
    if(progress < allQuestions.length-1){
      setTimeout(() => {
        this.setState({
          progress: progress+1,
          currentQuestion: allQuestions[progress + 1],
          loadingNewQuestion: false
        })
      }, 300);
    } else {
      this.setState({
        loadingNewQuestion: false,
        showResults: true
      })
    }
  }

  render() {
    return <div>
        {/* Header - start */}
        <header>
          <img src={glyph00} className={`fade-out ${this.state.loadingNewQuestion ? 'fade-out fade-out-active' : ''}`} />
        </header>
        {/* Header - end */}

        {/* Content - start */}
        <div className={`content`}>
          {/* Progress - start */}
          <div className="progress-container">
            <div className="progress-label">1 question sur 5 complétée</div>
            <div className="progress">
              <div className="progress-bar" style={{ width: `20%` }}>
                <span className="sr-only">20% complété</span>
              </div>
            </div>
          </div>

          {
            !this.state.showResults ? <Question currentQuestion={this.state.currentQuestion} onSelectAnswer={this.onSelectAnswer} loadingNewQuestion={this.state.loadingNewQuestion} /> : <Results loadingNewQuestion={this.state.loadingNewQuestion} allAnswers={this.state.allAnswers} allQuestions={this.state.allQuestions} />
          }

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
      </div>;
  }
}

export default App;
