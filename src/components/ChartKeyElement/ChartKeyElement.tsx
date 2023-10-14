import React from 'react';
import { Tooltip, Text } from '@shopify/polaris';
import TagDot from '../TagDot';
import { ChartKeyElementProps } from '../../types';

import { styles } from './ChartKeyElement.styles';

const ChartKeyElement: React.FC<ChartKeyElementProps> = ({
    elementText,
    keyColor,
    keyValue,
    tooltipText,
}) => {
    return (
        <div style={styles.chartKeyElementWrapper}>
            <TagDot color={keyColor} />
            <Tooltip hasUnderline={true} content={tooltipText}>
                <Text as="p" color="subdued" fontWeight="medium">
                    {elementText}
                </Text>
            </Tooltip>
            <span style={styles.chartKeyElement}>{keyValue}</span>
        </div>
    );
};

export default ChartKeyElement;
