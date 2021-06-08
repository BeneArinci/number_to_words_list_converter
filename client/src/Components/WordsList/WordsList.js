import ListGroup from 'react-bootstrap/listGroup';

const WordsList = ( {getWordsList} ) => {
    return (
 
        <ListGroup horizontal className="justify-content-center">
            {
                getWordsList ? 
                getWordsList.map((word, i) => {
                    console.log("word",word)
                    return <ListGroup.Item>{word}</ListGroup.Item>
                })
                : null
            }
        </ListGroup>
    )
}

export default WordsList