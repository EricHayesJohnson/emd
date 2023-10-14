import React from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import SummaryPage from './pages/SummaryPage';

function App() {
    return (
        <div className="App">
            <AppProvider i18n={enTranslations}>
                <Page>
                    <SummaryPage />
                </Page>
            </AppProvider>
        </div>
    );
}

export default App;
