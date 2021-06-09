import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NumbersKeyboard.css'

const NumbersKeyboard = ({onNumberClick, convertNumber, onDeleteClick}) => {
	return (
        <Container data-testid='test-keyboard' fluid className='keyboard'>
			<Row className='first-row row'>
				<Col className='col'>
					<button className="key"
						onClick={() => onNumberClick('1')}>1
						<span></span>
					</button>
				</Col>
				<Col className='col'>
					<button className="key"
					onClick={()=> onNumberClick('2')}>2
						<span>a b c</span>
					</button>
				</Col>
				<Col className='col'>
					<button value="3" className="key"
					onClick={()=> onNumberClick('3')}>3
						<span>d e f</span>
					</button>
				</Col>
			</Row>
			<Row className='second-row row'>
				<Col className='col'>
					<button value="4" className="key"
					onClick={()=> onNumberClick('4')}>4
						<span>g h i</span>
					</button>
				</Col>
				<Col className='col'>
					<button value="5" className="key"
					onClick={()=> onNumberClick('5')}>5
						<span>j k l</span>
					</button>
				</Col>
				<Col className='col'>
					<button value="6" className="key"
					onClick={()=> onNumberClick('6')}>6
						<span>m n o</span>
					</button>
				</Col>
			</Row>
			<Row className='third-row row'>
				<Col className='col'>
					<button value="7" className="key"
					onClick={()=> onNumberClick('7')}>7
						<span>p q r s</span>
					</button>
				</Col>
				<Col className='col'>
					<button value="8" className="key"
					onClick={()=> onNumberClick('8')}>8
						<span>t u v</span>
					</button>
				</Col>
				<Col className='col'>
					<button value="9" className="key"
					onClick={()=> onNumberClick('9')}>9
						<span>w x y z</span>
					</button>
				</Col>
			</Row>
			<Row>
                <Col className='col'>
                    <button
                        className="convert key"
                        onClick={convertNumber}> 
                        Convert
                    </button>
                </Col>
                <Col className='col'>
                    <button value="0" className="key"
                        onClick={()=> onNumberClick('0')}>0
                        <span></span>
                    </button>
                </Col>
                <Col className='col'>
                    <button
                        className="delete key"
                        onClick={onDeleteClick}> 
                        <img src="https://image.flaticon.com/icons/svg/61/61167.svg" width="30rem" height="30rem" alt="Delete"></img>
                    </button>
                </Col>
			</Row>
		</Container>
	)
}

export default NumbersKeyboard