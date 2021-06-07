import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/listGroup';
import Row from 'react-bootstrap/Row'

import NumbersKeyboard from './Components/NumbersKeyboard/NumbersKeyboard'


const App = () => {

	const [ getInput, setGetInput ] = useState(null)
	const [ getWordsList, setGetWordsList ] = useState([])

	const onInputChange = (event) => {
		setGetInput(event.target.value)
	}

	const onNumberClick = (event) => {
		console.log(event.target.value)
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
			<NumbersKeyboard onNumberClick={onNumberClick}></NumbersKeyboard>
			<center>
				<form>
					<label>
							Enter your number:
					<input type="text" onChange={onInputChange}/>
					</label>
					<input type="submit" value="Convert" onClick={(e)=>{convertNumber(e)}}/>
				</form>
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
