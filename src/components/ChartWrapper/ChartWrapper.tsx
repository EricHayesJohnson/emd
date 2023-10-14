import React, { useMemo } from 'react';
import ChartDonut from '../ChartDonut';
import ChartKey from '../ChartKey';
import { ChartData, ChartWrapperProps, Task } from '../../types';

import { styles } from './ChartWrapper.style';

const ChartWrapper: React.FC<ChartWrapperProps> = ({
    numDaysProjects,
    numDaysDrills,
    numDaysTools,
    numDaysNothing,
    totalDays,
}: ChartWrapperProps) => {
    const chartData: [ChartData, ChartData, ChartData, ChartData] = useMemo(
        () => [
            // Polaris color pallete hex values
            {
                name: Task.PROJECTS,
                value: numDaysProjects,
                color: '#1d9aaa',
            },
            {
                name: Task.DRILLS,
                value: numDaysDrills,
                color: '#1d7afc',
            },
            {
                name: Task.TOOLS,
                value: numDaysTools,
                color: '#8270db',
            },
            {
                name: Task.NOTHING,
                value: numDaysNothing,
                color: '#cd519d',
            },
        ],
        [numDaysProjects, numDaysDrills, numDaysTools, numDaysNothing]
    );

    return (
        <div style={styles.donutAndKeyWrapper}>
            <ChartDonut chartData={chartData} totalDays={totalDays} />
            <ChartKey chartData={chartData} />
        </div>
    );
};

export default ChartWrapper;
