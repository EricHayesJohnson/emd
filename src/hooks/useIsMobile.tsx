import { useContext } from 'react';
import { MobileViewContext } from '../providers/MobileViewProvider';

export const useIsMobile = () => {
    return useContext(MobileViewContext);
};
