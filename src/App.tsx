import React from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import SummaryPage from './pages/SummaryPage';
import { MobileViewProvider } from './providers/MobileViewProvider';

function App() {
    return (
        <div className="App">
            <AppProvider i18n={enTranslations}>
                <MobileViewProvider>
                    <Page>
                        <SummaryPage />
                    </Page>
                </MobileViewProvider>
            </AppProvider>
        </div>
    );
}

export default App;
