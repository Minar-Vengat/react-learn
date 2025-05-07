
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import Conditionl from './Components/condition';
import Thala from './Components/condition';
import List from './Components/List'
import Form from './Components/Form'
import Memo from './Components/Memo'

function app() {
  const details = {name:"CARS",learn:"react"}
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home details={details} />}/>
      <Route path='/Events' element={<Events/>}/>
      <Route path='/Conditional' element={<Conditionl/>} />
      <Route path='/Condition' element={<Thala/>} />
      <Route path='/List' element={<List/>} />  
      <Route path='/Form' element={<Form/>} />  
      <Route path='/Memo' element={<Memo/>} />  
    </Routes>
   </BrowserRouter>
  );
}
export default app ;