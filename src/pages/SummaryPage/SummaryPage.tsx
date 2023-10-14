import React from 'react';
import Heading from '../../components/Heading';
import MetricCards from '../../components/MetricCards';
import ChartWrapper from '../../components/ChartWrapper';
import useSummaryPageData from '../../hooks/useSummaryPageData';

import { styles } from './SummaryPage.style';

const SummaryPage: React.FC = () => {
    const { data } = useSummaryPageData();
    return (
        <div style={styles.SummaryPageWrapper}>
            <Heading startDate={data.startDate} endDate={data.endDate} />
            <MetricCards
                currentRatio={data.currentRatio}
                currentStreak={data.currentStreak}
            />
            <ChartWrapper
                numDaysProjects={data.numDaysProjects}
                numDaysDrills={data.numDaysDrills}
                numDaysTools={data.numDaysTools}
                numDaysNothing={data.numDaysNothing}
                totalDays={data.totalDays}
            />
        </div>
    );
};

export default SummaryPage;
