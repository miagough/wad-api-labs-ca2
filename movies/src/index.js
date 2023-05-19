import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import CreditsPage from "./pages/creditsPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import NowPlayingPage from './pages/nowPlayingPage';
import PopularPage from "./pages/popularMoviesPage";
import RecommendationsPage from "./pages/recommendationsPage";
import TopRatedPage from "./pages/topRatedMoviesPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";





const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});




const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/credits/:id" element={ <CreditsPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/recommendations/:id" element={<RecommendationsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/nowplaying" element={<NowPlayingPage/>}/>
          <Route path="/movies/popular" element={<PopularPage/>}/>
          <Route path="/movies/toprated" element={<TopRatedPage/>}/>
          <Route path="/movies/login" element={<LoginPage/>}/>
          <Route path="/movies/signUp" element={<SignUpPage/>}/>
      
        </Routes>
        </MoviesContextProvider>
       
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
