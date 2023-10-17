import React from 'react';
import { Text, Tooltip } from '@shopify/polaris';
import { MetricCardsProps } from '../../types';
import { useIsMobile } from '../../hooks/useIsMobile';

import { styles } from './MetricCards.style';

const MetricCards: React.FC<MetricCardsProps> = ({
    currentRatio,
    currentStreak,
}: MetricCardsProps) => {
    const isMobile = useIsMobile();
    const emptyData = '---';
    return (
        <div
            style={
                isMobile
                    ? styles.metricCardsWrapperMobile
                    : styles.metricCardsWrapper
            }
        >
            <div style={isMobile ? styles.metricCardMobile : styles.metricCard}>
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
            <div style={isMobile ? styles.metricCardMobile : styles.metricCard}>
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
