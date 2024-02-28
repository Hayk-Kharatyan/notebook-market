import './App.css';
import { useReducer, useState } from 'react'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from "react-router-dom"
import { Context } from './Components/Context';
import Compare from './Components/CopmareNotes/Compare';
import CompareCounter from './Components/CompareCounter/CompareCounter';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
function useAppReducer() {
  let [Counter, setCounter] = useState(0)
  let [compCounter, setCompCounter] = useState(0)
  let [Total, setTotal] = useState(0)
  let [state, dispatch] = useReducer(reducer, [])
  let [statecompare, dispatchCompare] = useReducer(reducerCompare, [])
  function reducerCompare(state = [], action) {
    let { note } = action.payload;
    if (action.type === "notebook-compare") {
      const isExist = state.some((item) => item.id === note.id);
      if (isExist) {
        let newState = state.filter((st) => st.id !== note.id);
        setCompCounter(compCounter -= 1)
        console.log(compCounter);
        return newState;
      } else {
        let newState = [
          ...state,
          {
            brand: note.brand,
            model: note.model,
            price: note.price,
            color: note.color,
            ram: note.ram,
            processor: note.processor,
            videocart: note.videocart,
            storage: note.storage,
            img: note.img,
            id: note.id,
          }
        ];
        setCompCounter(compCounter += 1)
        console.log(compCounter);
        return newState;
      }
    } else if (action.type === "notebook-compare-del") {
      let newState = state.filter((st) => st.id !== note.id);
      setCompCounter(compCounter -= 1)
      return newState;
    } else {

      return state;
    }
  }

  function reducer(state = [], action) {
    let { note } = action.payload;
    if (action.type === "notebook-add") {
      let statment = state.filter((item) => item.id === note.id);
      let newTotal = Total + note.price * note.counter;
      let newCounter = Counter + 1;
      if (statment.length > 0) {
        let newState = state.map((st) => {
          if (st.id === note.id) {
            st.counter = st.counter + 1;
          }
          return st;
        });

        setTotal(newTotal);
        setCounter(newCounter);
        return newState;
      } else {
        setTotal(newTotal);
        setCounter(newCounter);
        let newState = [
          ...state,
          {
            name: note.brand + " " + note.model,
            img: note.img,
            id: note.id,
            price: note.price,
            counter: note.counter,
            processor:note.processor,
            videocart:note.videocart
          }
        ];
        return newState;
      }
    } else if (action.type === "notebook-del") {
      let newTotal = Total - note.price * note.counter;
      let newCounter = Counter - note.counter;

      setTotal(newTotal);
      setCounter(newCounter);
      let newState = state.filter((sta) => sta.id !== note.id);
      return newState;
    }
  }

  return { state, Counter, setCounter, Total, setTotal, dispatch, statecompare, dispatchCompare, compCounter, setCompCounter };
}


function App() {
  const { state, Counter, setCounter, Total, setTotal, dispatch, statecompare, dispatchCompare, compCounter, setCompCounter } = useAppReducer();
  return (
    <Context.Provider value={{ state, Counter, setCounter, Total, setTotal, dispatch, statecompare, dispatchCompare, compCounter, setCompCounter }}>
      <div className="App">
        <Nav />
        <Header />
        <Routes>
          <Route path='/' index element={<Home />}></Route>
          <Route path='/compare' element={<Compare />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        <CompareCounter />
        <Footer/>
      </div>
    </Context.Provider>
  );
}

export default App;