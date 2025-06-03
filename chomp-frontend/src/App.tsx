import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as React from 'react';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { SettingsLayout } from './layouts/SettingsLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <SettingsLayout>
              <SettingsPage />
            </SettingsLayout>
          }
        />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
