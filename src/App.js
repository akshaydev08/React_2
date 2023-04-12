import './App.css';
import { useEffect, useState } from 'react';
import Reward from './Reward';
import { transactions } from './transaction';

function App() {
   const [transaction, setTransaction] = useState([])
   
   useEffect(() => {
    setTransaction(transactions);
   }, [])

  return (
    <div className="App">
      <Reward transaction={transaction} />
    </div>
  );
}

export default App;
