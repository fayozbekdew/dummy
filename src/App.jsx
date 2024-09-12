import { useCallback, useEffect } from "react";
import {useNavigate, Routes,Route} from 'react-router-dom'
import FullCardDesc from "./components/FullCardDesc";
import FullUserAbout from "./components/FullUserAbout";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos";
import Users from "./pages/Users";

function App() {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
  }, [navigate ]);

  function ProtectedRoute({
    children,
    redirectTo = '/login',
    isAuthentication,
  }) {
    useEffect(() => {
      if (!isAuthentication) {
        navigate(redirectTo);
      }
    }, [isAuthentication, redirectTo]);

    return children;
  }

  return (
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {token && (
          <>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Home />
                  </MainLayout>
                </ProtectedRoute>
              }
            />
              <Route
              path="/products"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Products/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <FullCardDesc/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
             <Route
              path="/users"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Users/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/:id"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <FullUserAbout/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
             <Route
              path="/posts"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Posts/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
             <Route
              path="/todos"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Todos/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  isAuthentication={token ? true : false}
                  redirectTo="/login"
                >
                  <MainLayout>
                    <Profile/>
                  </MainLayout>
                </ProtectedRoute>
              }
            />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}

export default App;
