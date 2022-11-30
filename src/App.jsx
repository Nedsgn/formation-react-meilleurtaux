import { useState, useMemo } from 'react'
import './App.css'

import { AccountList } from './components/Account/AccountList'
import { AccountDetail } from './components/Account/AccountDetail'
import { useAccountSort } from './hooks/useAccountSort'

function App() {
  const [count, setCount] = useState(0)
  const [selectedAccount, setSelectedAccount] = useState(null)
  const {sortField, sortIcon, sortFn, changeSort} = useAccountSort();

  const accountsData = [{
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
const [accounts, setAccounts] = useState(accountsData);

const addAmount = (id) => {
  const account = accounts.find(account => account.id === id);
  account.balance += 10;
  setAccounts([...accounts]);
 }

 const increment = () => {
  setCount((previous) => previous + 1);
  setCount((previous) => previous + 1);
 }

 const addAccount = () => {
  setAccounts([...accounts, {id: 99, name: 'test', balance: 0, lastOperationDate: null}]);
 }

 const selectAccount = id => {
  const account = accounts.find(account => account.id === id);
  setSelectedAccount(account ?? null);
 }

 const expensiveMethod = () => {
  let i = 0;
  for(i=0;i<999999999;i++) { }
  return accounts.length;
}
const result = useMemo(() => expensiveMethod(), [accounts])
console.log(sortField, sortIcon, sortFn, changeSort)
  return (
    <div className="App">
      <h1 onClick={() => selectAccount(null)}>Formation React</h1>
      <h2>{result}</h2>
      <button onClick={increment}>{count}</button>
      <div>{JSON.stringify(selectAccount)}</div>
      {selectedAccount ? (
      <AccountDetail {...selectedAccount} />
      )
    : (
      <AccountList accounts={accounts} selectAccount={selectAccount} changeSort={changeSort} addAccount={addAccount} sortField={sortField}
      sortIcon={sortIcon} sortFn={sortFn}/>
    )}
    </div>
  )
}

export default App
