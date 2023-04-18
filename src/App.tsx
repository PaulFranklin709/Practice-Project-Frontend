import React, { Suspense } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
// import logo from './logo.svg';
import LoadingPage from './pages/LoadingPage';

function App() {
  const Router = React.lazy(() => import("./components/Router"));
  return (
    <div>
      <NavigationBar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Suspense fallback={<LoadingPage />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
