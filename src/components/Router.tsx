import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import FriendsPage from '../pages/FriendsPage';
import ReimbursementsPage from '../pages/Reimbursements';
import ReimbursementPage from '../pages/Reimbursement';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/friends' element={<FriendsPage />} />
            <Route path='/reimbursements' element={<ReimbursementsPage />} />
            <Route path='/reimbursement/:reimb_id' element={<ReimbursementPage />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}
