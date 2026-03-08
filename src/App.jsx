import "./index.css"
import  { useState, useMemo } from "react"



function App (){
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);
   const multiCountMemo = useMemo(() => {
    console.warn("multiCount")
    return  count * 5

   },[count]);




  return (
 <div className="App">
    <h1> Count: {count}</h1>
    <h1> item: {item}</h1>
    <h2>{multiCountMemo} </h2>
    <button onClick={() => setcount(count+1)}>apdate value </button>
    <button onClick={()=> setitem(item*10)}>Count Value</button>
    </div>
) 
} export default App;