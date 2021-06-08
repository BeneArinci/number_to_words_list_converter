import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css'


import NumbersKeyboard from './Components/NumbersKeyboard/NumbersKeyboard'
import InputPanel from './Components/InputPanel/InputPanel'
import WordsList from './Components/WordsList/WordsList'
import Scroll from './Components/Scroll/Scroll'


const App = () => {

	const [ getInput, setGetInput ] = useState('')
	const [ wordsList, setwordsList ] = useState([])
    const [ convertOn, setConvertOn ] = useState(false)

	const onNumberClick = (number) => {
		setGetInput(getInput+number)
	}

	const onDeleteClick = () => {
		setGetInput(getInput.slice(0, -1))
        if(getInput.length === 0) {
            setConvertOn(false)
            setGetInput('')
        }
	}

	const convertNumber = async (event) => {
		event.preventDefault()
		const apiResponse = await fetch(`http://localhost:8000/api/wordsList?number=${getInput}`)
		const { data: wordsList } = await apiResponse.json()
		setwordsList(wordsList)
        if(getInput.length>0){
            setConvertOn(true)
        }
        
	}

  return (
    <div className='app' style={{backgroundImage:"url(/phone_background.png)", backgroundSize:'contain', height: '60rem'}}>
        <InputPanel getInput={getInput}/>

        <div className='words-container-placeholder' style={{height: '3em', marginTop:'5em', marginBottom:'4em'}}>
        {
            convertOn && getInput && wordsList.length > 0 ? 
            <Scroll>
                <WordsList wordsList={wordsList}/>
            </Scroll>
            : null
        }
        </div>

        <NumbersKeyboard 
            onNumberClick={onNumberClick}
            convertNumber={convertNumber}
            onDeleteClick={onDeleteClick}
            >
        </NumbersKeyboard>
    </div>
  );
}

export default App;
