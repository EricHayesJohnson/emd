import React from 'react';
import { Text, Tooltip } from '@shopify/polaris';
import { MetricCardsProps } from '../../types';

import { styles } from './MetricCards.style';

const MetricCards: React.FC<MetricCardsProps> = ({
    currentRatio,
    currentStreak,
}: MetricCardsProps) => {
    const emptyData = '---';
    return (
        <div style={styles.metricCardsWrapper}>
            <div style={styles.metricCard}>
                <Tooltip
                    hasUnderline={true}
                    content={
                        'The overall ratio of mornings spent doing any type of dev work.'
                    }
                >
                    <Text
                        as="p"
                        color="subdued"
                        fontWeight="medium"
                        variant="headingLg"
                    >
                        {'Success Rate'}
                    </Text>
                </Tooltip>
                <div style={styles.metricCardNumber}>
                    {currentRatio ? `${currentRatio}%` : emptyData}
                </div>
            </div>
            <div style={styles.metricCard}>
                <Tooltip
                    hasUnderline={true}
                    content={
                        'The number of consecutive mornings doing any type of dev work.'
                    }
                >
                    <Text
                        as="p"
                        color="subdued"
                        fontWeight="medium"
                        variant="headingLg"
                    >
                        {'Current streak'}
                    </Text>
                </Tooltip>
                <div style={styles.metricCardNumber}>
                    {currentStreak || currentStreak === 0
                        ? currentStreak
                        : emptyData}
                </div>
            </div>
        </div>
    );
};
export default MetricCards;
