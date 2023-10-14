import { tokens } from '@shopify/polaris-tokens';

const chartKeyWrapper = {
    alignItems: 'center',
    display: 'flex',
    margineLeft: tokens.space['space-100'],
};

const chartKeyColumn = {
    display: 'flex',
} as const;

export const styles = {
    chartKeyWrapper,
    chartKeyColumn,
};
