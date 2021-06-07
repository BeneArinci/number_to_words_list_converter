import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NumbersKeyboard.css'

const NumbersKeyboard = ({onNumberClick, convertNumber}) => {
	return (
		<Container className='keyboard center'>
			<Row className='first-row row'>
				<Col>
					<button className="key btn btn-defaul"
						onClick={() => onNumberClick('1')}>1
						<span></span>
					</button>
				</Col>
				<Col>
					<button className="key btn btn-success"
					onClick={()=> onNumberClick('2')}>2
						<span>a b c</span>
					</button>
				</Col>
				<Col>
					<button value="3" className="key"
					onClick={()=> onNumberClick('3')}>3
						<span>d e f</span>
					</button>
				</Col>
			</Row>
			<Row className='second-row row'>
				<Col>
					<button value="4" class="key"
					onClick={()=> onNumberClick('4')}>4
						<span>g h i</span>
					</button>
				</Col>
				<Col>
					<button value="5" class="key"
					onClick={()=> onNumberClick('5')}>5
						<span>j k l</span>
					</button>
				</Col>
				<Col>
					<button value="6" class="key"
					onClick={()=> onNumberClick('6')}>6
						<span>m n o</span>
					</button>
				</Col>
			</Row>
			<Row className='third-row row'>
				<Col>
					<button value="7" class="key"
					onClick={()=> onNumberClick('7')}>7
						<span>p q r s</span>
					</button>
				</Col>
				<Col>
					<button value="8" class="key"
					onClick={()=> onNumberClick('8')}>8
						<span>t u v</span>
					</button>
				</Col>
				<Col>
					<button value="9" class="key"
					onClick={()=> onNumberClick('9')}>9
						<span>w x y z</span>
					</button>
				</Col>
			</Row>
			<Row>
			<Col>
				<button
					className="convert key"
					onClick={convertNumber}> 
					Convert
					{/* <img src="https://image.flaticon.com/icons/svg/61/61167.svg" width="30rem" height="30rem" alt="Delete icon"></img> */}
				</button>
			</Col>
			<Col>
				<button value="0" class="key"
				onClick={()=> onNumberClick('0')}>0
						<span>space</span>
					</button>
			</Col>
			<Col>
			<button
				className="delete key"> 
				<img src="https://image.flaticon.com/icons/svg/61/61167.svg" width="30rem" height="30rem" alt="Delete icon"></img>
			</button>
			</Col>
				

			</Row>
			
			
		
			
				
		
			
		</Container>
	)
}

export default NumbersKeyboard