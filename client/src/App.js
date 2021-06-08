import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

import NumbersKeyboard from './Components/NumbersKeyboard/NumbersKeyboard'
import InputPanel from './Components/InputPanel/InputPanel'
import WordsList from './Components/WordsList/WordsList'


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
		<div className='app' width='100vp '>
            <InputPanel getInput={getInput}>
            </InputPanel>

			<NumbersKeyboard 
				onNumberClick={onNumberClick}
				convertNumber={convertNumber}
				onDeleteClick={onDeleteClick}
				>
			</NumbersKeyboard>
            {
                convertOn && getInput
                ? <WordsList wordsList={wordsList}></WordsList>
                : null
            }
            
		</div>
  );
}

export default App;
