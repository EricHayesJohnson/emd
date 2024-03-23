import React from 'react';
import { AppProvider, Page } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import SummaryPage from './pages/SummaryPage';
import { MobileViewProvider } from './providers/MobileViewProvider';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitForm from './components/SubmitForm';

function App() {
    return (
        <div className="App">
            <AppProvider i18n={enTranslations}>
                <MobileViewProvider>
                    <Router>
                        <Page>
                            <Routes>
                                <Route path="/emd" element={<SummaryPage />} />
                                <Route path="*" element={<SummaryPage />} />
                                <Route
                                    path="emd/update"
                                    element={<SubmitForm />}
                                />
                            </Routes>
                        </Page>
                    </Router>
                </MobileViewProvider>
            </AppProvider>
        </div>
    );
}

export default App;
