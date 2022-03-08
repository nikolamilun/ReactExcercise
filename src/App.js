import {useState} from "react";
import './App.css';

function App() {
  const questions = [
    {
      question: 'Које године је био Косовски Бој?',
      right: 2,
      answers:[
          '1374.',
          '1389.',
          '1401.',
          '1398.'
      ]
    },
    {
      question: 'Које године је рођен Цар Душан?',
      right: 3,
      answers:[
          '1308.',
          '1295.',
          '1303.',
          '1325.'
      ]
    },
    {
      question: 'Које био први српски краљ?',
      right: 1,
      answers:[
          'Стефан Првовенчани',
          'Стефан Немања',
          'Стефан Милутин',
          'Стефан Урош'
      ]
    },
    {
      question: 'Како се звала жена краља Милутина?',
      right: 2,
      answers:[
          'Јелена',
          'Симонида',
          'Душанка',
          'Ана'
      ]
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [corrects, setCorrects] = useState(0);


  const handleAnswer = (answer) => {
    if(answer == questions[currentIndex].right)
        setCorrects(corrects + 1);
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="App">
      <div className = "container">
        {
          (currentIndex < questions.length)?
          (
            <>
              <div className = "questionDiv">
                <p>Питање број {currentIndex + 1}</p>
                <p>{questions[currentIndex].question}</p>
              </div>
              <div className = "answersDiv">
                {
                  questions[currentIndex].answers.map((item, index) => (
                    <button onClick={() => handleAnswer(index + 1)} className="answer">{`${index + 1} - ${item}`}</button>
                  ))
                }
              </div>
            </>
          ):
          (
            <div className="end">
              <p className="endmsg">Крај квиза!</p>
              <p className="endmsg">Број тачних: {corrects}</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
