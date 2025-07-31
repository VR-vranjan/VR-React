import React, {useState } from 'react'

const Counter = () => {

  const [count, setcount] = useState(0);
  
  return (
    <div>
      <h4>Count is: {count}</h4>
      <button onClick={() => setcount(count + 1)} >Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
      <h3>Number is:{count%2==0? "even" :"odd"}</h3>
      
    </div>
  )
}

export default Counter