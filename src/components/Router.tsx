import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import FriendsPage from '../pages/FriendsPage';
import ReimbursementsPage from '../pages/ReimbursementsPage';
import ReimbursementPage from '../pages/ReimbursementPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import NewReimbursementPage from '../pages/NewReimbursementPage';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/friends' element={<FriendsPage />} />
            <Route path='/reimbursements' element={<ReimbursementsPage />} />
            <Route path='/reimbursements/new' element={<NewReimbursementPage />} />
            <Route path='/reimbursements/:reimb_id' element={<ReimbursementPage />} />

            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
}
