
import {
  // BrowserRouter, Routes, Route
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import HomePage from './components/HomePage'
import ErrorPage from "./components/errors/ErrorPage";
import LoginPage from "./components/login/LoginPage";
import Home from "./components/app/Home";
import UploadFile from "./components/app/upload/UploadFile";
import Printer from "./components/app/upload/Printer";
import Printsetting from "./components/app/Printsetting/PrintSettings"
import ConfirmPrint from "./components/app/ConfirmPrint/ConfirmPrint.jsx"
import TransactionManagement from "./components/app/Employee/TransactionManagement.jsx";
import AfterLogin from "./components/app/AfterLogin/AfterLogin.jsx";
import ChoosePaper from "./components/app/BuyPaper/ChoosePaper.jsx";
import PaperShop from "./components/app/BuyPaper/PaperShop.jsx";


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
