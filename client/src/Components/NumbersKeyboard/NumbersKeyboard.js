import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NumbersKeyboard.css'

const NumbersKeyboard = () => {
	return (
		<Container className='keyboard center'>
			<Row className='first-row row'>
				<Col>
					<button data-value="1" class="key btn btn-defaul">1
						<span></span>
					</button>
				</Col>
				<Col>
					<button data-value="2" class="key btn btn-success">2
						<span>a b c</span>
					</button>
				</Col>
				<Col>
					<button data-value="3" class="key">3
						<span>d e f</span>
					</button>
				</Col>
			</Row>
			<Row className='second-row row'>
				<Col>
					<button data-value="4" class="key">4
						<span>g h i</span>
					</button>
				</Col>
				<Col>
					<button data-value="5" class="key">5
						<span>j k l</span>
					</button>
				</Col>
				<Col>
					<button data-value="6" class="key">6
						<span>m n o</span>
					</button>
				</Col>
			</Row>
			<Row className='third-row row'>
				<Col>
					<button data-value="7" class="key">7
						<span>p q r s</span>
					</button>
				</Col>
				<Col>
					<button data-value="8" class="key">8
						<span>t u v</span>
					</button>
				</Col>
				<Col>
					<button data-value="9" class="key">9
						<span>w x y z</span>
					</button>
				</Col>
			</Row>
			<Row>
			<Col>
			</Col>
			<Col>
				<button data-value="0" class="key">0
						<span>space</span>
					</button>
			</Col>
			<Col>
			<button
				class="delete key"> 
				<img src="https://image.flaticon.com/icons/svg/61/61167.svg" width="30rem" height="30rem" alt="Delete icon"></img>
				</button>
			</Col>
				

			</Row>
			
			
		
			
				
		
			
		</Container>
	)
}

export default NumbersKeyboard