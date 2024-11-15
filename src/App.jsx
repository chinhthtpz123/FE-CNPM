
import * as ReactDOM from "react-dom/client";
import {
  // BrowserRouter, Routes, Route
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage'
import ErrorPage from "./components/errors/ErrorPage";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./components/login/LoginPage";
import Home from "./components/app/Home";
import UploadFile from "./components/app/upload/UploadFile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Main layout for these routes
    children: [
      {
        path: '/',
        element: <HomePage />, // Default route
        errorElement: <ErrorPage />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'upload',
        element: <UploadFile />,
      }
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
]);

function App() {
  
  return (
    // <BrowserRouter future={{ v7_startTransition: true }}>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}/>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider 
      router={router} 
      future={{
        v7_startTransition: true,
      }
    }/>

  )
}

export default App;
