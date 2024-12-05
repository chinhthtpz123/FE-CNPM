import React from "react";
import Nav from '../../layout/Nav';
import Footer from "../../layout/Footer";
import { FaRegUserCircle } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { Link } from "react-router-dom";

const EmployeeInfo = () => {
  // Dữ liệu giả định cho thông tin nhân viên và các máy in
  const employee = {
    name: "Nguyễn Văn A",
    employeeId: "NV12345", // Mã nhân viên
    email: "nguyenvana@example.com",
    phone: "0123456789", // Số điện thoại
    startDate: new Date(2020, 0, 1), // Ngày bắt đầu làm việc
    printerList: ["Máy in Canon 123", "Máy in HP 456", "Máy in Epson 789", "Máy in Samsung 101", "Máy in Brother 102", "Máy in Canon 104"], // Thêm nhiều máy in giả
    transactions: [
      { id: 1, name: "Giao dịch 1", timestamp: new Date() },
      { id: 2, name: "Giao dịch 2", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) },
      { id: 3, name: "Giao dịch 3", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48) },
      { id: 4, name: "Giao dịch 4", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72) },
      { id: 5, name: "Giao dịch 5", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96) },
      { id: 6, name: "Giao dịch 6", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120) },
      { id: 1, name: "Giao dịch 1", timestamp: new Date() },
      { id: 2, name: "Giao dịch 2", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) },
      { id: 3, name: "Giao dịch 3", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48) },
      { id: 4, name: "Giao dịch 4", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72) },
      { id: 5, name: "Giao dịch 5", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96) },
      { id: 6, name: "Giao dịch 6", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120) },{ id: 1, name: "Giao dịch 1", timestamp: new Date() },
      { id: 2, name: "Giao dịch 2", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) },
      { id: 3, name: "Giao dịch 3", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48) },
      { id: 4, name: "Giao dịch 4", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72) },
      { id: 5, name: "Giao dịch 5", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96) },
      { id: 6, name: "Giao dịch 6", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120) },
    ],
  };

  return (
    <div>
      <Nav />
      <div className="tw-mt-20 tw-main-content tw-flex tw-justify-center tw-items-start tw-gap-8 tw-px-4 tw-py-6 w-full tw-font-roboto">
        
        {/* Column 1: Printer Information */}
        <div className="tw-w-1/3 tw-p-6 tw-bg-white tw-shadow-xl tw-rounded-lg">
          <div className="tw-info-card tw-mb-6">
            <div className="tw-text-center tw-overflow-hidden tw-border tw-border-gray-300 tw-rounded-lg">
              <h3 className="tw-text-sm tw-py-2 tw-bg-green-200 tw-font-semibold tw-text-green-600 tw-mb-4 tw-flex tw-items-center tw-justify-center">
                Máy in
                <HiPrinter className="tw-ml-2 tw-text-lg" />
              </h3>
              <div className="tw-h-48 tw-overflow-y-auto"> {/* Thêm chiều cao cố định và thanh cuộn */}
                <ul className="tw-text-sm tw-text-black tw-text-center">
                  {employee.printerList.map((printer, index) => (
                    <li key={index} className="tw-mb-4 tw-flex tw-justify-center tw-text-black">
                       <Link to={"/inforprinter"}>
                        <p className="tw-font-bold tw-ml-2 tw-cursor-pointer tw-text-black hover:tw-text-blue-500">
                          {printer}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Employee Information */}
        <div className="tw-w-1/3 tw-p-6 tw-bg-white tw-shadow-xl tw-rounded-lg">
          <div className="tw-info-card tw-mb-6">
            <div className="tw-text-center tw-overflow-hidden tw-border tw-border-gray-300 tw-rounded-lg">
              <h3 className="tw-text-sm tw-py-2 tw-bg-orange-200 tw-font-semibold tw-text-orange-600 tw-mb-4 tw-flex tw-items-center tw-justify-center">
                Thông tin nhân viên
                <FaRegUserCircle className="tw-ml-2 tw-text-lg" />
              </h3>
              <p className="tw-text-black">
                <span className="tw-font-bold">Tên:</span> {employee.name}
              </p>
              <p className="tw-text-black">
                <span className="tw-font-bold">Mã nhân viên:</span> {employee.employeeId}
              </p>
              <p className="tw-text-black">
                <span className="tw-font-bold">Email:</span> {employee.email}
              </p>
              <p className="tw-text-black">
                <span className="tw-font-bold">Số điện thoại:</span> {employee.phone}
              </p>
              <p className="tw-text-black">
                <span className="tw-font-bold">Ngày bắt đầu làm việc:</span> {new Date(employee.startDate).toLocaleDateString()}
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
                  {employee.transactions.map((transaction, index) => (
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

export default EmployeeInfo;
