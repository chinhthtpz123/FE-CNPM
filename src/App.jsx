
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
import Printsetting from "./components/app/Printsetting/PrintSettings";
import ConfirmPrint from "./components/app/ConfirmPrint/ConfirmPrint.jsx";
// import PrinterList from "./components/app/transaction/PrinterList.jsx";
// import PrinterTransaction from "./components/app/transaction/PrinterTransaction.jsx";
import PrintManagement from "./components/app/PrintManagement/PrintManagement.jsx";
import PrintManagementCus from "./components/app/PrintManagement/PrintManagement-Cus.jsx";
import PrintManagementAdmin from "./components/app/PrintManagement/PrintManagementAdmin.jsx";
import TransactionManagement from "./components/app/Employee/TransactionManagement.jsx";
import AfterLogin from "./components/app/AfterLogin/AfterLogin.jsx";
import ChoosePaper from "./components/app/BuyPaper/ChoosePaper.jsx";
import PaperShop from "./components/app/BuyPaper/PaperShop.jsx";
import ChoosePrinter from "./components/app/Printer/Printerchoose.jsx";
import InforPrinter from "./components/app/Printer/InforPrinter.jsx";
import EmployeeInfo from "./components/app/Employee/Infor.jsx";
import CustomerInfo from "./components/app/Customer/InforCustomer.jsx";
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
  // {
  //   path: '/printertransaction',
  //   element: <PrinterTransaction />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: '/management',
    element: <PrintManagement />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/managementcus',
    element: <PrintManagementCus />,
    
    errorElement: <ErrorPage />,
  },
  {
    path: '/employee/management/transaction',
    element: <TransactionManagement />,
    errorElement: <ErrorPage />,
  },
  {
  path: '/managementad',
  element: <PrintManagementAdmin />,
  errorElement: <ErrorPage />,
},
  {
    path: '/afterlogin',
    element: <AfterLogin />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/choosepaper',
    element: <ChoosePaper />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/papershop',
    element: <PaperShop />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/chooseprinter',
    element: <ChoosePrinter />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/chooseprinter',
    element: <ChoosePrinter />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inforprinter',
    element: <InforPrinter/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inforemployee',
    element: <EmployeeInfo/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inforcustomer',
    element: <CustomerInfo/>,
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

  );
}

export default App;
