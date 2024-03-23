export enum Task {
    PROJECTS = 'projects',
    DRILLS = 'drills',
    TOOLS = 'tools',
    NOTHING = 'nothing',
}

export type ChartDataDbResponse = {
    id: number;
    created_at: string;
    task: Task;
};

export type SummaryPageData = {
    isLoading: boolean;
    data: {
        startDate?: string;
        endDate?: string;
        totalDays?: number;
        currentRatio?: number;
        currentStreak?: number;
        numDaysProjects?: number;
        numDaysDrills?: number;
        numDaysTools?: number;
        numDaysNothing?: number;
        lastRowId?: number;
        lastDateAsString?: string;
        isTodayInDb?: boolean;
    };
};

export type HeadingProps = {
    startDate?: string;
    endDate?: string;
};

export type MetricCardsProps = {
    currentRatio?: number;
    currentStreak?: number;
};

export type ChartWrapperProps = {
    numDaysProjects?: number;
    numDaysDrills?: number;
    numDaysTools?: number;
    numDaysNothing?: number;
    totalDays?: number;
};

export type ChartKeyElementProps = {
    elementText: string;
    keyColor: string;
    keyValue?: number;
    tooltipText: string;
};

export type TagDotProps = {
    color: string;
};

export type ChartData = {
    name: Task;
    value?: number;
    color: string;
};

type ChartDataArray = [ChartData, ChartData, ChartData, ChartData];

export type ChartDonutProps = {
    chartData: ChartDataArray;
    totalDays?: number;
};

export type ChartKeyProps = {
    chartData: ChartDataArray;
};
