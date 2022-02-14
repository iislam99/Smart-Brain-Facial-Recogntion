import React from 'react';
import './FaceRecognition.css';
import Box from "./Box"

const FaceRecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                {boxes.map(box => {
                    return (<Box box={box}/>)
                })}
            </div>
        </div>
    )
}

export default FaceRecognition;