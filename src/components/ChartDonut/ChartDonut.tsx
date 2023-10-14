import React from 'react';
import { Text } from '@shopify/polaris';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { ChartDonutProps } from '../../types.ts';

import { styles } from './ChartDonut.style.ts';

const ChartDonut: React.FC<ChartDonutProps> = ({
    chartData,
    totalDays,
}: ChartDonutProps) => {
    const showEmptyChartState = totalDays === 0;
    const chartLabel = () => {
        return (
            <div style={styles.chartLabelWrapper}>
                <Text as="p" fontWeight="medium" color="subdued">
                    {'Days'}
                </Text>
                <Text as="p" fontWeight="bold">
                    {totalDays}
                </Text>
            </div>
        );
    };

    return (
        <div
            role="group"
            aria-label={'Early morning dev donut chart'}
            style={styles.donutChartWrapper}
        >
            {chartLabel()}
            <ResponsiveContainer
                aspect={1}
                id="donut-chart"
                width="100%"
                height="auto"
                minHeight="144px"
            >
                <PieChart
                    style={{ cursor: 'inherit' }}
                    height={200}
                    width={200}
                >
                    <Pie
                        aria-hidden={true}
                        dataKey="value"
                        data={showEmptyChartState ? [{ value: 1 }] : chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius="75%"
                        outerRadius="100%"
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={showEmptyChartState ? 0 : 1}
                        blendStroke={showEmptyChartState}
                        isAnimationActive={false}
                    >
                        {showEmptyChartState ? (
                            <Cell fill={'grey'} />
                        ) : (
                            <>
                                {chartData.map(
                                    (
                                        entry: {
                                            color: string | undefined;
                                        },
                                        index: React.Key | null | undefined
                                    ) => (
                                        <Cell key={index} fill={entry.color} />
                                    )
                                )}
                            </>
                        )}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartDonut;
