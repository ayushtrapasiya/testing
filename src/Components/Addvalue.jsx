import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { mainstore } from '../Store/Redux'

export default function Addvalue() {

    let entervalue = useRef({})
    let dispatch = useDispatch()

    let numberval = useRef()
    function Submitvalue() {
        dispatch(mainstore.Add(entervalue.current.value ))
        dispatch(mainstore.Addnum(numberval.current.value))
    }
    return (
        <>
            <input type="text" placeholder='Enter your  name ' ref={entervalue} />
            &nbsp;&nbsp;&nbsp;
            <input type="number" ref={numberval} />
            &nbsp;&nbsp;&nbsp;
            <button onClick={Submitvalue} > Add value </button>
        </>
    )
}
