import PropTypes from 'prop-types';
import { StatisticThumb } from './StatisticItem.Styled';

export function StatisticItem({ label, percentage }) {
    return <StatisticThumb>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </StatisticThumb>;
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}