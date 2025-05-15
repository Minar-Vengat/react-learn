
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Events from './Components/Events';
import Conditionl from './Components/condition';
import List from './Components/List'
import Form from './Components/Form'
import Memo from './Components/Memo'
import Parent from './Components/Parent'
import Chid from './Components/Child'
import Useeffect  from './Components/UseEffect'
import UseEffect2 from './Components/UseEffect 2';
import UseRef from './Components/UseRef'
import Useref2 from './Components/UseRef2'
import UseState from './Components/UseState';
import UseRef3 from './Components/UseRef3'
import UseReducer from './Components/UseReducer';
import Reducer    from './Components/UseReducer2';
function app() {
  const details = { name: "CARS", learn: "react" }
  return (
    <center>
     <Events/>
     <Conditionl/>
     <List/>
     <Form/>
     <Memo/>
     <Parent/>
     <Useeffect/>
     <UseEffect2/>
     <UseRef/>
     <Useref2/>
     <UseState/>
     <UseRef3/>
     <UseReducer/>
     <Reducer/>
    </center>
  );
}
export default app;