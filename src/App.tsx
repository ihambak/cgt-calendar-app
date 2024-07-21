import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CalendarView from './components/CalendarView';
import Settings from './components/Settings';

const App: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<CalendarView />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Layout>
    );
};

export default App;
