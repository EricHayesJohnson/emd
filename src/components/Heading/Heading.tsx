import React from 'react';
import { Text, Spinner } from '@shopify/polaris';
import { formatDate } from '../../utils/dateUtils';
import { HeadingProps } from '../../types';

const Heading: React.FC<HeadingProps> = ({
    startDate,
    endDate,
    isLoading = true,
}: HeadingProps) => {
    const titleText = 'Early Morning Dev';
    const hasDates = !!startDate && !!endDate;
    const dateRangeText = `Data from ${formatDate(startDate)} ~ ${formatDate(
        endDate
    )}`;

    const loadingContent = () => {
        return (
            <div style={{ display: 'flex' }}>
                <Text as="p" color="subdued">
                    {'Data from: '}
                </Text>
                <div style={{ marginLeft: '8px' }}>
                    <Spinner size="small" accessibilityLabel="Small spinner" />
                </div>
            </div>
        );
    };

    return (
        <div style={{ minHeight: '62px' }}>
            <Text variant="heading2xl" as="h3">
                {titleText}
            </Text>
            {isLoading && loadingContent()}
            <Text as="p" color="subdued">
                {hasDates && dateRangeText}
            </Text>
        </div>
    );
};

export default Heading;
