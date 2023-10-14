import React from 'react';
import { Text } from '@shopify/polaris';
import { formatDate } from '../../utils/dateUtils';
import { HeadingProps } from '../../types';

const Heading: React.FC<HeadingProps> = ({
    startDate,
    endDate,
}: HeadingProps) => {
    const titleText = 'Early Morning Dev';
    const hasDates = !!startDate && !!endDate;
    const dateRangeText = `Data from ${formatDate(startDate)} ~ ${formatDate(
        endDate
    )}`;

    return (
        <div>
            <Text variant="heading2xl" as="h3">
                {titleText}
            </Text>
            <Text as="p" color="subdued">
                {hasDates ? dateRangeText : 'Data from'}
            </Text>
        </div>
    );
};

export default Heading;
