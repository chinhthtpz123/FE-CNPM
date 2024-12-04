
import * as ReactDOM from "react-dom/client";
import {
  // BrowserRouter, Routes, Route
  createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ErrorPage from "./components/errors/ErrorPage";
import LoginPage from "./components/login/LoginPage";
import Home from "./components/app/Home";
import UploadFile from "./components/app/upload/UploadFile";
import Printer from "./components/app/upload/Printer";
import Printsetting from "./components/app/Printsetting/PrintSettings";
import ConfirmPrint from "./components/app/ConfirmPrint/ConfirmPrint.jsx";
import PrinterList from "./components/app/transaction/PrinterList.jsx";
import PrinterTransaction from "./components/app/transaction/PrinterTransaction.jsx";
import PrintManagement from "./components/app/PrintManagement/PrintManagement.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element:  <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/upload',
    element: <UploadFile />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/upload/printer',
    element: <Printer />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/printsetting',
    element: <Printsetting />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/confirm',
    element: <ConfirmPrint />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/printerlist',
    element: <PrinterList />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/printertransaction',
    element: <PrinterTransaction />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/management',
    element: <PrintManagement />,
    errorElement: <ErrorPage />,
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
