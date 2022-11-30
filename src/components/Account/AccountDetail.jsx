import { dateFormatter } from "../../helpers/Formatters"

export const AccountDetail = ({id, name, balance, lastOperationDate}) => (
    <ul>
        <li>Nom : { name }</li>
        <li>Solde : { balance }</li>
        <li>Dernière opération : { lastOperationDate && dateFormatter.format(Date.parse(lastOperationDate)) }</li>
    </ul>
)