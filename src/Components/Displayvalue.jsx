import React from 'react'
import { useSelector } from 'react-redux'

export default function Displayvalue() {

  let { inputvalue, num } = useSelector((value) => value.value)
  console.log(inputvalue)
  console.log(num)
  let data = Array.from(inputvalue)
  console.log(data)
  return (
    <>
      {data.map((v) => {
        return (<div>
          <h1>{v}</h1>
          <h1>{v.num}</h1>
        </div>
        )
      })}

    </>
  )
}
