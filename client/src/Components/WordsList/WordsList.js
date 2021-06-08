import ListGroup from 'react-bootstrap/listGroup';
import Scroll from '../Scroll/Scroll'

const WordsList = ( {wordsList} ) => {


    return (
    <div className='words-list' style={{width:'100vp', marginTop:'3rem'}}>
        <Scroll>
            <div >
            <ListGroup horizontal className="d-flex " style={{width: 'auto', margin:'auto', textAlign:'center'}}>
                {
                    wordsList ? 
                    wordsList.map((word, i) => {
                        console.log("word",word)
                        return <ListGroup.Item>{word}</ListGroup.Item>
                    })
                    : null
                }
                </ListGroup>
            </div>
            
            
        </Scroll>
    </div>
    
       
    )
}

export default WordsList