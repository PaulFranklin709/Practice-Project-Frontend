import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}