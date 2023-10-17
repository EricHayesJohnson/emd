import React, { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const MobileViewContext = createContext(false);
type MobileViewProviderProps = {
    children: React.ReactNode;
};

export const MobileViewProvider: React.FC<MobileViewProviderProps> = ({
    children,
}) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 490px)' });
    return (
        <MobileViewContext.Provider value={isTabletOrMobile}>
            {children}
        </MobileViewContext.Provider>
    );
};
