import React from 'react'
import Events from './Events'
import Condition from './condition'
import List from './List'
import Form from './Form'
import Memo from './Memo' 

const Home = ({details}) => {
  
  return (
    <div>
      <h1>{details.name}</h1>
      <p>{details.learn}</p>
      <h1>react events</h1>
    
    </div>
  )
}
export default Home 
