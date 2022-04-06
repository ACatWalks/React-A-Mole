import React, {useEffect} from 'react'
import molehillImg from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random()*5000);
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img alt='empty molehill' src={molehillImg} style={{'width': '30vw'}} />
        </div>
    )
}

export default EmptySlot