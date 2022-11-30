import { useCallback, useState } from "react";
import { dateComparer, stringComparer } from "../helpers/Comparers";
import { NAME_ASC_SORTFIELD, NAME_DESC_SORTFIELD, BALANCE_ASC_SORTFIELD, BALANCE_DESC_SORTFIELD, DATE_ASC_SORTFIELD, DATE_DESC_SORTFIELD, NAME_SORTFIELD } from "../constants/Account";

const sortPredicates = {
    'NAME-ASC': (a, b) => stringComparer(a.name, b.name),
    'NAME-DESC': (a, b) => stringComparer(b.name, a.name),
    'BALANCE-ASC': (a, b) => a.balance - b.balance,
    'BALANCE-DESC': (a, b) => b.balance - a.balance,
    'DATE-ASC': (a, b) => dateComparer(a.lastOperationDate, b.lastOperationDate),
    'DATE-DESC': (a, b) => dateComparer(b.lastOperationDate, a.lastOperationDate)
}

export function useAccountSort() {
    const [sortModel, setSortModel] = useState({
        sortField: NAME_SORTFIELD, 
        sortDirection: 'ASC', 
        sortFn: sortPredicates[NAME_ASC_SORTFIELD],
        sortIcon: '\u2193'});

    const changeSort = useCallback(sortField => setSortModel(prev => {
        const sortDirection = prev.sortField === sortField && prev.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        return ({sortField, sortDirection, 
            sortFn: sortPredicates[`${sortField}-${sortDirection}`],
            sortIcon: (sortDirection === 'ASC' ? '\u2193' : '\u2191') })}), [])

    return {...sortModel, changeSort}
}