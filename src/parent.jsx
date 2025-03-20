import React from 'react'
import Child from './child'

const Parent = () => {
  return (
    <div>
        <Child name="apple" age="45"></Child>
        <Child name="orange"></Child>
        <Child name="kiwi"></Child>


    </div>
  )
}

export default Parent