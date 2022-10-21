import PropTypes from 'prop-types';
// import css from './TransactionHistoryLine.module.css';

export function TransactionHistoryLine({type,amount,currency}) {
    return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>;
}

TransactionHistoryLine.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
}