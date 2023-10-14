const chartLabelWrapper = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
} as const;

const donutChartWrapper = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    maxWidth: '9rem',
    minWidth: '9rem',
    position: 'relative',
    width: '100%',
} as const;

export const styles = {
    chartLabelWrapper,
    donutChartWrapper,
};
