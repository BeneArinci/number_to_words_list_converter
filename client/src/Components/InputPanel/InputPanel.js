import './InputPanel.css'

const InputPanel = ({getInput}) => {
    return(
        <div className='panel'>
                    
					<div className = 'panel' >
                        <div className = 'label'>
							Enter the number to convert:
					    </div>
                        <span >
                            <h1>{getInput}</h1>
                        </span>
						
					</div>	
        </div>
					
	
    )

}

export default InputPanel