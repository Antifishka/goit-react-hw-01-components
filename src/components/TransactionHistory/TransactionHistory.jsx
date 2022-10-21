import { TransactionHistoryLine } from "./TransactionHistoryLine/TransactionHistoryLine";
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.transactionHead}>Type</th>
                    <th className={css.transactionHead}>Amount</th>
                    <th className={css.transactionHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <TransactionHistoryLine
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}