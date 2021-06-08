import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

import Row from 'react-bootstrap/Row'

import NumbersKeyboard from './Components/NumbersKeyboard/NumbersKeyboard'
import InputPanel from './Components/InputPanel/InputPanel'
import WordsList from './Components/WordsList/WordsList'


const App = () => {

	const [ getInput, setGetInput ] = useState('')
	const [ getWordsList, setGetWordsList ] = useState([])

	const onNumberClick = (number) => {
		setGetInput(getInput+number)
	}

	const onDeleteClick = () => {
		setGetInput(getInput.slice(0, -1))
	}

	const convertNumber = async (event) => {
		event.preventDefault()
		const apiResponse = await fetch(`http://localhost:8000/api/wordsList?number=${getInput}`)
		const { data: wordsList } = await apiResponse.json()
		setGetWordsList(wordsList)
		console.log("eeeeee",wordsList[0])
	}

  return (
		<div>
            <InputPanel getInput={getInput}>
            </InputPanel>

			<NumbersKeyboard 
				onNumberClick={onNumberClick}
				convertNumber={convertNumber}
				onDeleteClick={onDeleteClick}
				>
			</NumbersKeyboard>

            <WordsList getWordsList={getWordsList}>
            </WordsList>
		</div>
  );
}

export default App;
