import React, {useEffect} from 'react'
import moleImg from './mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random()*5000);
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img alt='mole' src={moleImg} onClick={props.handleClick} style={{'width': '30vw'}} />
        </div>
    )
}

export default Mole