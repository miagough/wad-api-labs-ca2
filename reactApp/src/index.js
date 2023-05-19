import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage } from "./pages";

import LoginPage from "../../movies/src/pages/loginPage";
import SignUpPage from "../../movies/src/pages/signUpPage";
import AuthProvider from "../../movies/src/authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "../../movies/src/protectedRoutes";
import MovieProvider from "../../movies/src/moviesContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MovieProvider>
          <Routes>
            <Route path="/public" element={ <PublicPage /> } />
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/signup" element={ <SignUpPage /> } />

            <Route element={<ProtectedRoutes />}>
              <Route path="/movies" element={<Movies />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));