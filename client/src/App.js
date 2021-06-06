import { useState } from 'react';

const App = () => {

	const [ getInput, setGetInput ] = useState(null)
	const [ getWordsList, setGetWordsList ] = useState([])

	const onInputChange = (event) => {
		setGetInput(event.target.value)
	}

	const convertNumber = async (event) => {
		event.preventDefault()
		const apiResponse = await fetch(`http://localhost:8000/api/wordsList?number=${getInput}`)
		const { data: wordsList } = await apiResponse.json()
		setGetWordsList(wordsList)
		console.log(wordsList)
	}

  return (
		<center>
			<form>
				<label>
						Enter your number:
				<input type="text" onChange={onInputChange}/>
				</label>
				<input type="submit" value="Convert" onClick={(e)=>{convertNumber(e)}}/>
			</form>
		</center>
  );
}

export default App;
