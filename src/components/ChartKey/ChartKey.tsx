import React from 'react';
import ChartKeyElement from '../ChartKeyElement';
import { ChartKeyProps } from '../../types';

import { styles } from './ChartKey.styles';

const ChartKey: React.FC<ChartKeyProps> = ({ chartData }: ChartKeyProps) => {
    const [projects, drills, tools, nothing] = chartData;

    const projectsTooltipText =
        'Mornings spent building side projects and porfolio pieces.';
    const drillsTooltipText =
        'Mornings spent practicing algorithms and code challenges.';
    const toolsTooltipText =
        'Mornings spent learning languages, libraries and tooling.';
    const nothingTooltipText = 'Mornings spent doing no development work.';

    return (
        <div style={styles.chartKeyWrapper}>
            <div style={styles.chartKeyColumn}>
                <ChartKeyElement
                    elementText="Projects"
                    keyColor={projects?.color}
                    keyValue={projects?.value}
                    tooltipText={projectsTooltipText}
                />
                <ChartKeyElement
                    elementText="Drills"
                    keyColor={drills?.color}
                    keyValue={drills?.value}
                    tooltipText={drillsTooltipText}
                />
                <ChartKeyElement
                    elementText="Tools"
                    keyColor={tools?.color}
                    keyValue={tools?.value}
                    tooltipText={toolsTooltipText}
                />
                <ChartKeyElement
                    elementText="Skip"
                    keyColor={nothing?.color}
                    keyValue={nothing?.value}
                    tooltipText={nothingTooltipText}
                />
            </div>
        </div>
    );
};

export default ChartKey;
