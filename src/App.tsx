import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Add from './pages/Add';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Upgrade from './pages/Upgrade';

import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <Add />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/upgrade"
          element={
            <Layout>
              <Upgrade />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
