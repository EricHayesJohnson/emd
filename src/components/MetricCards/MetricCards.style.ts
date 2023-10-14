import { tokens } from '@shopify/polaris-tokens';

const metricCardsWrapper = {
    display: 'flex',
    flexDirection: 'row',
    margin: `${tokens.space['space-2']} ${tokens.space['space-6']} ${tokens.space['space-0']}`,
    height: '8.5rem',
} as const;

const metricCard = {
    display: 'flex',
    flex: '1',
    width: 'fit-content',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: tokens.space['space-16'],
    background: tokens.color['color-bg'],
    margin: tokens.space['space-2'],
    borderRadius: tokens.border['border-radius-2'],
} as const;

const metricCardNumber = {
    fontSize: tokens.font['font-size-400'],
    marginTop: tokens.space['space-2'],
    fontWeight: tokens.font['font-weight-medium'],
} as const;

export const styles = {
    metricCardsWrapper,
    metricCard,
    metricCardNumber,
};
