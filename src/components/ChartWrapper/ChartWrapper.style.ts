import { tokens } from '@shopify/polaris-tokens';

const donutAndKeyWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: tokens.space['space-600'],
} as const;

export const styles = { donutAndKeyWrapper };
