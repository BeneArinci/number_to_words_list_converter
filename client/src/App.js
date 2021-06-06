import { useState } from 'react';

const App = () => {

	const [ getInput, setGetInput ] = useState(null)

	const onInputChange = (event) => {
		setGetInput(event.target.value)
		console.log(getInput)
	}

  return (
		<center>
			<form>
				<label>
						Enter your number:
				<input type="text" onChange={onInputChange}/>
				</label>
				<input type="submit" value="Convert"/>
			</form>
		</center>
  );
}

export default App;
