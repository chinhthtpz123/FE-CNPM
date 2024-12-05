
import {
  // BrowserRouter, Routes, Route
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage';
import ErrorPage from "./components/errors/ErrorPage";
import LoginPage from "./components/login/LoginPage";
import Home from "./components/app/Home";
import UploadFile from "./components/app/upload/UploadFile";
import Printer from "./components/app/upload/Printer";
import Printsetting from "./components/app/Printsetting/PrintSettings"
import ConfirmPrint from "./components/app/ConfirmPrint/ConfirmPrint.jsx"
import TransactionManagement from "./components/app/Transaction/TransactionManagement.jsx";
import AfterLogin from "./components/app/AfterLogin/AfterLogin.jsx";
import ChoosePaper from "./components/app/BuyPaper/ChoosePaper.jsx";
import PaperShop from "./components/app/BuyPaper/PaperShop.jsx";

import CustomerManagement from './components/app/Transaction/CustomerManagement.jsx'
import PrintManagement from "./components/app/DetailTransaction/PrintManagementDetail.jsx";
import PrintManagementCus from "./components/app/DetailTransaction/PrintManagementCus.jsx";
import AdminManagementDetail from "./components/app/DetailTransaction/AdminManagementDetail.jsx";
import UserManagement from "./components/app/UserManagement/UserManagement.jsx";
import AdminManagement from "./components/app/Transaction/AdminMangement.jsx"
import PrinterManagement from "./components/app/Transaction/PrinterManagement.jsx";

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
    path: '/upload/printsetting',
    element: <Printsetting />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/upload/confirm',
    element: <ConfirmPrint />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/employee/management/transaction',
    element: <TransactionManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/customer/management/transaction',
    element: <CustomerManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/management/transaction',
    element: <AdminManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/afterlogin',
    element: <AfterLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/paper/choose',
    element: <ChoosePaper />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/paper/shop',
    element: <PaperShop />,
  },
  {
    path: '/employee/print/detail/:id',
    element: <PrintManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/customer/print/detail/:id',
    element: <PrintManagementCus />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/print/detail/:id',
    element: <AdminManagementDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/management/user',
    element: <UserManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/management/printer',
    element: <PrinterManagement />,
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
