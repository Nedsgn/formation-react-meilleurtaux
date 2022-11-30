import { useState } from 'react';
import { BALANCE_SORTFIELD, DATE_SORTFIELD, NAME_SORTFIELD } from '../../constants/Account';
import { currencyFormatter, dateFormatter } from '../../helpers/Formatters'

export const AccountList = ({accounts, selectAccount, changeSort, addAccount, sortField, sortIcon, sortFn}) => {
    return (
    <>
    <button onClick={addAccount}>Ajouter</button>
      <table>
        <thead>
          <tr>
            <th onClick={() => changeSort(NAME_SORTFIELD)}>Nom {sortField === NAME_SORTFIELD && sortIcon}</th>
            <th onClick={() => changeSort(BALANCE_SORTFIELD)}>Solde {sortField === BALANCE_SORTFIELD && sortIcon}</th>
            <th onClick={() => changeSort(DATE_SORTFIELD)}>Date de dernière opération {sortField === DATE_SORTFIELD && sortIcon}</th>
          </tr>
        </thead>
      <tbody>
        {accounts
        .sort(sortFn)
        .map(({id, name, balance, lastOperationDate}, index) => (
        <tr key={id} data-ispair={index %2 === 0 ? 'pair' : null} onClick={() => selectAccount(id)}>
          <td>{name}</td>
          <td>{currencyFormatter.format(balance)}</td>
          <td>{lastOperationDate && dateFormatter.format(Date.parse(lastOperationDate))}</td>
          </tr>)
          )}
        </tbody>
        </table>
        </>
    )
}