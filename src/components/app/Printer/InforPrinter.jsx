import React, { useState, useEffect } from "react";
import Nav from '../../layout/Nav';
import Footer from "../../layout/Footer";
import { FaRegUserCircle } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { Link } from "react-router-dom";

const PrinterInfo = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const employees = [
    { name: "Nguyễn Văn A", email: "nguyenvana@example.com" },
    { name: "Trần Thị B", email: "tranthib@example.com" },
    { name: "Lê Văn C", email: "levanc@example.com" },
  ];

  const printerInfo = {
    name: "Máy in Canon 123",
    status: "ONLINE",
    location: "Hồ Chí Minh",
    code: "IN12345",
  };

  const transactions = [
    { id: 1, name: "Giao dịch 1", timestamp: new Date() },
    { id: 2, name: "Giao dịch 2", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) },
    { id: 3, name: "Giao dịch 3", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2) },
    
  ];

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  return (
    <div>
      <Nav />
      <div className="tw-mt-20 tw-main-content tw-flex tw-justify-center tw-items-start tw-gap-8 tw-px-4 tw-py-6 w-full tw-font-roboto">
        {/* Column 1: Employee Information */}
        <div className="tw-w-1/3 tw-p-6 tw-bg-white tw-shadow-xl tw-rounded-lg">
          {/* User Info */}
          <div className="tw-info-card tw-mb-6">
            <div className="tw-text-center tw-overflow-hidden tw-border tw-border-gray-300 tw-rounded-lg">
        <h3 className="tw-text-sm tw-py-2 tw-bg-green-200 tw-font-semibold tw-text-green-600 tw-mb-4 tw-flex tw-items-center tw-justify-center">
                Nhân viên
                <FaRegUserCircle className="tw-ml-2 tw-text-lg" />
              </h3>
          <ul className="tw-text-sm tw-text-black">
            {employees.map((employee, index) => (
              <li key={index} className="tw-mb-4 tw-flex tw-justify-between tw-text-black">
                <Link to={"/inforemployee"}><p className=" tw-font-bold tw-ml-2 tw-cursor-pointer tw-text-black hover:tw-text-blue-500">{employee.name}</p></Link>
                <p className="tw-text-black tw-mr-2">{employee.email}</p>
              </li>
            ))}
          </ul>
        </div>
</div>
</div>
        {/* Column 2: Printer Information */}
        <div className="tw-w-1/3 tw-p-6 tw-bg-white tw-shadow-xl tw-rounded-lg">
          <div className="tw-info-card tw-mb-6">
            <div className="tw-text-center tw-overflow-hidden tw-border tw-border-gray-300 tw-rounded-lg">
        <h3 className="tw-text-sm tw-py-2 tw-bg-orange-200 tw-font-semibold tw-text-orange-600 tw-mb-4 tw-flex tw-items-center tw-justify-center">
                Máy in
                <HiPrinter className="tw-ml-2 tw-text-lg" />
              </h3>
          <p className=" tw-text-black">
            <span className="tw-font-bold">Tên máy:</span> {printerInfo.name}
          </p>
          <p className=" tw-text-black">
            <span className="tw-font-bold">Trạng thái:</span> <span
                        className={`tw-inline-block tw-px-3 tw-py-1 tw-border tw-text-sm tw-font-semibold tw-rounded-full ${
                          printerInfo.status === "ONLINE"
                            ? "tw-bg-green-100 tw-text-green-600"
                            : "tw-bg-red-100 tw-text-red-600"
                        }`}
                      >
                        {printerInfo.status}
                      </span>
          </p>
          <p className=" tw-text-black">
            <span className="tw-font-bold">Location:</span> {printerInfo.location}
          </p>
          <p className=" tw-text-black">
            <span className="tw-font-bold">Mã máy in:</span> {printerInfo.code}
          </p>
        </div>
        </div>
        </div>
        {/* Column 3: Recent Transactions */}
        <div className="tw-w-1/3 tw-p-6 tw-bg-white tw-shadow-xl tw-rounded-lg">
          <div className="tw-info-card tw-mb-6">
            <div className="tw-text-center tw-overflow-hidden tw-border tw-border-gray-300 tw-rounded-lg">
        <h3 className="tw-text-sm tw-py-2 tw-bg-blue-200 tw-font-semibold tw-text-blue-600 tw-mb-4 tw-flex tw-items-center tw-justify-center">
                Giao dịch gần đây
                <LuNewspaper className="tw-ml-2 tw-text-lg" />
              </h3>
              <div className="tw-h-48 tw-overflow-y-auto">
                <ul className="tw-text-sm tw-text-gray-700">
                  {transactions.map((transaction, index) => (
                    <li key={index} className="tw-flex tw-justify-between">
                      <Link to={"/transaction-detail"}>
                        <p className="tw-font-bold tw-ml-2 tw-cursor-pointer tw-text-black hover:tw-text-blue-500">{transaction.name}</p>
                      </Link>
                      <p className="tw-text-black tw-mr-2">{new Date(transaction.timestamp).toLocaleString()}</p>
                    </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default PrinterInfo;