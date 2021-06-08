import ListGroup from 'react-bootstrap/listGroup';
import './WordsList.css'

const WordsList = ( {wordsList} ) => {
    return (
        <ListGroup horizontal className="words-list">
            {
                wordsList ? 
                wordsList.map((word, i) => {
                    return <ListGroup.Item className='single-word'>{word}</ListGroup.Item>
                })
                : null
            }
        </ListGroup>
    )
}

export default WordsList