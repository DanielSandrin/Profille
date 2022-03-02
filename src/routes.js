import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './components/SideBar';
import Jobs from './pages/Jobs';
import NewJob from './pages/NewJob';
import { AuthContextProvider } from './contexts/AuthContexts';


export default function Router() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/dashboard" element={<Profile />}>
                        <Route path="Jobs" element={<Jobs />} />
                        <Route path="newJob" element={<NewJob />} />
                    </Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}