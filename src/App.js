import { useEffect, useState } from 'react'

const App = () => {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [seconds, setSeconds] = useState(0);
    const [choiceSelected, setChoiceSelected] = useState(false);
    const choices = ['rock', 'paper', 'scissors'];

    const handleClick = (value) => {
        setChoiceSelected(true);
        setUserChoice(value);
        generateComputerChoice();
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    const startTimer = () => {
        setSeconds(3);
        setResult(null);
        setComputerChoice(null);
        setUserChoice(null);
        setChoiceSelected(false);
    }

    useEffect(() => {
        // eslint-disable-next-line no-lone-blocks
        {
            switch (userChoice + computerChoice) {
                case 'scissorspaper':
                case 'rockscissors':
                case 'paperrock':
                    setResult('YOU WIN!')
                    break
                case 'paperscissors':
                case 'scissorsrock':
                case 'rockpaper':
                    setResult('YOU LOSE!')
                    break
                case 'rockrock':
                case 'paperpaper':
                case 'scissorsscissors':
                    setResult('ITS A DRAW!')
                    break
                default:
                    break
            }
        }
        if (seconds > 0) {
            setTimeout(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
    }, [computerChoice, userChoice, seconds])

    return (
        <div>
            {seconds === 0 ?
                <div>
                    {
                        choiceSelected ?
                            <div>
                                <button onClick={startTimer}>Play again</button>
                                <h1>user choice is: {userChoice}</h1>
                                <h1>computer choice is: {computerChoice}</h1>
                            </div> :
                            <div>
                                <p>
                                    Please select your choice
                                </p>
                                {
                                    choices.map((choice, index) =>
                                        <button key={index} onClick={() => handleClick(choice)}>
                                            {choice}
                                        </button>
                                    )
                                }
                            </div>
                    }
                    <h1>{result}</h1>
                </div>

                : seconds}
        </div>
    )
}

export default App
