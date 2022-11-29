import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header/Header'
import './App.css'
import { currencyFormatter, dateFormatter } from './helpers/Formatters'

function App() {
  const [count, setCount] = useState(0)

  const tableauData = [{
    "id": 1,
    "name": "Principal",
    "balance": 500,
    lastOperationDate: '2022-10-29'
  },{
    "id": 2,
    "name": "Secondaire",
    "balance": -100,
    lastOperationDate: '2022-11-12'
  },
  {
    "id": 3,
    "name": "Joint",
    "balance": 1000,
    lastOperationDate: '2022-09-03'
  }
];
const [tableau, setTableau] = useState(tableauData);

 const addAmount = (id) => {
  const account = tableau.find(account => account.id === id);
  account.balance += 10;
  setTableau([...tableau]);
 }

  return (
    <div className="App">
      <h1>Formation React</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Solde</th>
            <th>Date de dernière opération</th>
          </tr>
        </thead>
      <tbody>
        {tableau
        .sort((accountA, accountB) => Date.parse(accountB.lastOperationDate) - Date.parse(accountA.lastOperationDate))
        .map(({id, name, balance, lastOperationDate}, index) => (
        <tr key={id} data-ispair={index %2 === 0 ? 'pair' : null} onClick={() => addAmount(id)}>
          <td>{name}</td>
          <td>{currencyFormatter.format(balance)}</td>
          <td>{dateFormatter.format(Date.parse(lastOperationDate))}</td>
          </tr>)
          )}
        </tbody>
        </table>
    </div>
  )
}

export default App
