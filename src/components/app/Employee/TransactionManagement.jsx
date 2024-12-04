
import React, { useState } from "react";
import Nav from '../../layout/Nav';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const transactionListTest = [
  {id: 1, name: "transaction1", status:"pending" , customerName: "TB", createdAt:"2024-12-4", isChange: false},
  {id: 2, name: "transaction2", status:"process" , customerName: "CC", createdAt:"2024-12-4", isChange: false},
  {id: 3, name: "transaction3", status:"failure", customerName: "KL", createdAt:"2024-12-4", isChange: false},
  {id: 4, name: "transaction4", status:"done", customerName: "XC", createdAt:"2024-12-4", isChange: false},
]

const TransactionManagement = () => {
  const [status, setStatus] = useState("pending");
  const [transactionList, setTransactionList] = useState(transactionListTest);

  const hoverButton = (() => "tw-text-gray-500 tw-bg-white tw-transition-all hover:tw-translate-y-[-4px]")();
  const handleChange = (item) => {
    setTransactionList(transactionList.map(transaction => transaction.id === item.id && !item.isChange ? {... transaction, isChange: !item.isChange}: transaction));
  }

  return (
    <>
      <Nav />
      <div className="tw-mt-[73px] tw-ml-[240px]">

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
        <div className="tw-mt-12 tw-overflow-y-auto tw-h-52 tw-relative">
          <table className="tw-mx-auto tw-border-separate tw-border tw-border-slate-200 tw-rounded-2xl tw-border-spacing-0 tw-overflow-hidden tw-w-full">
            <thead className="tw-bg-gray-100">
              <tr>
                <th className="tw-px-8 tw-py-3 tw-border-b tw-border-slate-200 tw-text-center">ID</th>
                <th className="tw-px-8 tw-py-3 tw-border-b tw-border-slate-200 tw-text-center">Transaction Name</th>
                <th className="tw-px-8 tw-py-3 tw-border-b tw-border-slate-200 tw-text-center">Customer Name</th>
                <th className="tw-px-8 tw-py-3 tw-border-b tw-border-slate-200 tw-text-center">CreatedAt</th>
                <th className="tw-px-8 tw-py-3 tw-border-b tw-border-slate-200 tw-text-center"></th>
              </tr>
            </thead>

            <tbody>
              {transactionList.map((item, index) => {
                const commentButton = (() => {
                  switch (status) {
                    case "pending":
                      return "Confirm";
                    case "done":
                      return "Detail";
                    case "failure":
                      return "Order again";
                    case "process":
                      return "Done";
                    default:
                      return "";
                  }
                })();

                return index === transactionList.length - 1 ? (
                  <tr key={item.id}>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-text-center">{item.id}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-text-center">{item.name}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-text-center">{item.customerName}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-text-center">{item.createdAt}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3"
                      onClick={() => handleChange(item)}>
                      {
                        item.isChange ? <AiOutlineCheckCircle className="tw-text-green-500 tw-w-6 tw-h-auto" /> :
                    
                        <button className={`tw-border tw-w-28 tw-h-10 tw-text-white tw-text-semibold tw-bg-blue-500 tw-rounded-full`}>{commentButton}</button>
                      }
                    </td>
                  </tr>
                ) :
                (
                  <tr key={item.id}>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-border-b tw-text-center tw-border-slate-200">{item.id}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-border-b tw-text-center tw-border-slate-200">{item.name}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-border-b tw-text-center tw-border-slate-200">{item.customerName}</td>
                    <td className="tw-w-28 tw-h-10 tw-py-3 tw-border-b tw-text-center tw-border-slate-200">{item.createdAt}</td>
                    <td 
                      className="tw-w-28 tw-h-10 tw-py-3 tw-border-b tw-border-slate-200"
                      onClick={() => handleChange(item)}
                    >
                      {
                        item.isChange ? <AiOutlineCheckCircle className="tw-text-green-500 tw-w-6 tw-h-auto" /> :
                    
                        <button className={`tw-border tw-w-28 tw-h-10 tw-text-white tw-text-semibold tw-bg-blue-500 tw-rounded-full`}>{commentButton}</button>
                      }
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
};

export default TransactionManagement;