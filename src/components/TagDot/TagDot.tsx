import React from 'react';
import { TagDotProps } from '../../types';

import { styles } from './TagDot.style';

const TagDot = ({ color }: TagDotProps) => {
    return (
        <span
            style={{
                ...styles.tagDot,
                background: color,
            }}
        />
    );
};

export default TagDot;
