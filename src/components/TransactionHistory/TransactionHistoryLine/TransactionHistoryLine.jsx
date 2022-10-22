import PropTypes from 'prop-types';
import css from './TransactionHistoryLine.module.css';

export function TransactionHistoryLine({type,amount,currency}) {
    return <tr className={css.transactionLine}>
        <td className={css.transactionCell}>{type}</td>
        <td className={css.transactionCell}>{amount}</td>
        <td className={css.transactionCell}>{currency}</td>
    </tr>;
}

TransactionHistoryLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}