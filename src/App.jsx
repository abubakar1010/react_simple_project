
import './App.css'
import Condition from './Conditional'
import Event from './Event'
import Greeting from './Greeting'
import ReactComponent from './ReactComponent'
import RenderingList from './RenderingLists'
import User from './User'
import { useState } from 'react'
import './Conditional.css'


function App() {

  const [count,setCount] = useState(0)

    function handleEvent(){
        let newCount = count + 1
        setCount(newCount)
    }


  return (
    <>
    <h2>Testing Is everything is worked</h2>
    <ReactComponent></ReactComponent>
    <ReactComponent />

    <Greeting />
    <User />
    <Condition />
    <RenderingList />
      <h2>Counters that update together</h2>
    <div className='condition'>
    <Event count={count} onClick= {handleEvent} />
    <Event count={count} onClick= {handleEvent} />
    </div>
    </>
  )
}

export default App
