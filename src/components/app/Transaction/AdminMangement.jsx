import { useState, useCallback, useEffect, lazy, Suspense} from "react";
import Nav from '../../layout/Nav.jsx';
import axios from 'axios';
import { apiBaseUrl } from "../../../config.js";
const AdminLazyLoading = lazy(() => import('./AdminLazyLoading.jsx'));

let transactionsList = [];




// const renderTable = (transactions) => {
//   const tableBody = document.getElementById("transaction-table-body");
//   tableBody.innerHTML = ""; // Clear existing rows

//   transactions.forEach((transaction) => {
//     const row = `
//       <tr>
//         <td>${transaction.id}</td>
//         <td>${transaction.transactionName}</td>
//         <td>${transaction.customerName}</td>
//         <td>${transaction.employeeName}</td>
//         <td>${transaction.createdAt}</td>
//       </tr>
//     `;
//     tableBody.innerHTML += row;
//   });
// };






const TransactionManagement = () => {
  const [status, setStatus] = useState("pending");
  const [visibleData, setVisibleData] = useState(transactionsList);
  const loadMoreData = useCallback(() => {
    setVisibleData(prev => {
      return [...prev, ...transactionsList.map((transaction)=>({
        id: transaction.transactionId,
        name: transaction.name,
            customerName: `${transaction.customerName.firstName} ${transaction.customerName.lastName}`,
            employeeName: `${transaction.employeeName.firstName} ${transaction.employeeName.lastName}`,
            createdAt: transaction.createdAt,
      }))];
    });
  }, [status]);

  useEffect(() => {
    const fetchAdminTransactions = async (status)=>{
      const api_transactions = `${apiBaseUrl}/transactions`;
      const token = localStorage.getItem("accessTokenAdmin");
      const res = await axios.get(api_transactions,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params:{
          status: status,
        }
      });
      if(res.status == 200) {
        transactionsList = res.data.data.data;
        // renderTable(transactions);
      } else {
        console.error("Failed to fetch transactions:", res.data.message);
      }
    
    }
    fetchAdminTransactions(status.toUpperCase());
  },[]);

  useEffect(()=>{
    loadMoreData();
  },[])
  const hoverButton = (() => "tw-text-gray-500 tw-bg-white tw-transition-all hover:tw-translate-y-[-4px]")();

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    // Trigger when scrolled near the bottom
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setTimeout(() => {
        loadMoreData();
      }, 1000)
    }
  };
  console.log(visibleData)
  return (
    <>
      <Nav />
      <div className="tw-mt-28 tw-ml-52">

        {/* status gd */}
        <div className="tw-mt-36">
          <h2 className="tw-text-center tw-text-customBlue tw-font-semibold tw-mb-6">Transaction Management</h2>
          <div className="tw-flex tw-mx-auto tw-w-[90%] tw-h-20 tw-border tw-rounded-full tw-overflow-hidden tw-text-semibold">
            <button className={`tw-inline-flex tw-flex-1 tw-items-center tw-justify-center tw-px-6 ${status === "pending" ? "tw-bg-blue-100 tw-text-customBlue" : `${hoverButton}`}`}
            onClick={() => setStatus("pending")}
            >Pending</button>
            <button className={`tw-inline-flex tw-flex-1 tw-items-center tw-justify-center tw-px-6 ${status === "process" ? "tw-bg-blue-100 tw-text-customBlue" : `${hoverButton}`}`}
            onClick={() => setStatus("process")}
            >Process</button>
            <button className={`tw-inline-flex tw-flex-1 tw-items-center tw-justify-center tw-px-6 ${status === "failure" ? "tw-bg-blue-100 tw-text-customBlue" : `${hoverButton}`}`}
            onClick={() => setStatus("failure")}
            >Failure</button>
            <button className={`tw-inline-flex tw-flex-1 tw-items-center tw-justify-center tw-px-6 ${status === "done" ? "tw-bg-blue-100 tw-text-customBlue" : `${hoverButton}`}`}
            onClick={() => setStatus("done")}
            >Done</button>
          </div>

        </div>
        
        {/* list gd */}
        <div 
          className="tw-mt-12 tw-py-5 tw-overflow-y-auto tw-h-52 tw-relative"
          onScroll={handleScroll}>
          <Suspense>
            <AdminLazyLoading visibleData={visibleData}
                          status={status}
                          />
          </Suspense>
        </div>

      </div>
    </>
  )
};

export default TransactionManagement;