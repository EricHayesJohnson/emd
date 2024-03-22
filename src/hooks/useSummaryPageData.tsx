import { useEffect, useState } from 'react';
import { DBTable, supabase } from '../database/client';
import differenceInDays from 'date-fns/differenceInDays';
import { ChartDataDbResponse, SummaryPageData, Task } from '../types';
import { todayFormatForDb } from '../utils/dateUtils';

const useSummaryPageData = (): SummaryPageData => {
    const [dataFromDb, setDataFromDb] = useState<ChartDataDbResponse[] | null>(
        []
    );
    useEffect(() => {
        // adds delay to allow for loading state
        setTimeout(() => getAppData(), 2000);
    }, []);

    const getAppData = async () => {
        const { data } = await supabase.from(DBTable.SUMMARY_PAGE).select();
        setDataFromDb(data);
    };

    const sortedData = dataFromDb?.sort((a, b) => {
        if (a.created_at < b.created_at) {
            return -1;
        }
        if (a.created_at > b.created_at) {
            return 1;
        }
        return 0;
    });

    const startDate = sortedData?.[0]?.created_at || '';
    const endDate = sortedData?.[sortedData.length - 1]?.created_at || '';
    const lastRowId = sortedData?.[sortedData.length - 1]?.id || 0;
    const lastDateAsString =
        sortedData?.[sortedData.length - 1]?.created_at || '';
    const isTodayInDb = Boolean(
        dataFromDb?.find((el) => el.created_at === todayFormatForDb())
    );

    const totalDays = dataFromDb?.length || 0;
    const numDaysProjects =
        dataFromDb?.filter((el) => el.task === Task.PROJECTS).length || 0;
    const numDaysDrills =
        dataFromDb?.filter((el) => el.task === Task.DRILLS).length || 0;
    const numDaysTools =
        dataFromDb?.filter((el) => el.task === Task.TOOLS).length || 0;
    const numDaysNothing =
        dataFromDb?.filter((el) => el.task === Task.NOTHING).length || 0;

    const allDevDays = numDaysProjects + numDaysDrills + numDaysTools;
    const currentRatio = Math.trunc((allDevDays / totalDays) * 100);

    const getMostRecentDayOff = (): string => {
        const daysOff = (sortedData || [])
            .filter((el) => el.task === Task.NOTHING)
            .map((el) => el.created_at);
        return daysOff.length > 0 ? daysOff[daysOff.length - 1] : '';
    };

    const lastDayOff = getMostRecentDayOff();
    const currentStreak = differenceInDays(
        new Date(endDate),
        new Date(lastDayOff)
    );

    return {
        data: {
            startDate,
            endDate,
            totalDays,
            currentRatio,
            currentStreak,
            numDaysProjects,
            numDaysDrills,
            numDaysTools,
            numDaysNothing,
            lastRowId,
            lastDateAsString,
            isTodayInDb,
        },
    };
};

export default useSummaryPageData;
