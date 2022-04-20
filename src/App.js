import {useState} from "react";
import './App.css';

function App() {
  // All the questions, right answer indexes and answer options
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
  // Index of the current question
  const [currentIndex, setCurrentIndex] = useState(0);
  // Correct answer indexes
  const [corrects, setCorrects] = useState([]);

  // Check if the answer is right 
  const handleAnswer = (answer) => {
    if(answer == questions[currentIndex].right)
        setCorrects([...corrects, true]);
    else
        setCorrects([...corrects, false]);
        
    setCurrentIndex(currentIndex + 1);
  }
  // Main
  return (
    <div className="App">
      {/* A container for all of the content */}
      <div className = "container">
        {
          // Check if all the questions have been answered
          (currentIndex < questions.length)?
          (
            <>
               {/* Question */}
              <div className = "questionDiv">
                <p>Питање број {currentIndex + 1}</p>
                <p>{questions[currentIndex].question}</p>
              </div>
              {/* Answer options */}
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
            // End of the quiz message
            <>
              <div className="end">
                <p className="endmsg">Крај квиза!</p>
                <p className="endmsg">Број тачних: {corrects}</p>
              </div>
              <div className="end">
                {
                  // Each answer and its truity
                  corrects.map((item, index) => (
                        <p>
                          {`Питање број ${index + 1}: ${item ? ('Тачан одговор!') : (`Нетачно! тачан одговор је: ${questions[index].answers[questions[index].right - 1]}`)}`}
                        </p>
                  ))
                }
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}
// Export
export default App;
