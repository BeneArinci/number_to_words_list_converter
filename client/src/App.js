import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/listGroup';
import Row from 'react-bootstrap/Row'

import NumbersKeyboard from './Components/NumbersKeyboard/NumbersKeyboard'


const App = () => {

	const [ getInput, setGetInput ] = useState('')
	const [ getWordsList, setGetWordsList ] = useState([])

	const onNumberClick = (number) => {
		setGetInput(getInput+number)
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
			<NumbersKeyboard 
				onNumberClick={onNumberClick}
				convertNumber={convertNumber}
				>
			</NumbersKeyboard>
			<center>
		
					<label>
							Enter your number:
					</label>
					<div height='3rem'>
						<h1>{getInput}</h1>
					</div>	
		
			</center>
			<Row className="justify-content-md-center">
			<ListGroup variant='flush'>
				{
					getWordsList ? 
					getWordsList.map((word, i) => {
						console.log("word",word)
						return <ListGroup.Item>{word}</ListGroup.Item>
					})
					: null
				}
		  </ListGroup>
			</Row>
			
		</div>
	


  );
}

export default App;
