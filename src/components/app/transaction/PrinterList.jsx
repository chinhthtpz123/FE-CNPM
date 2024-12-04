import React, { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import PrinterImg from '../../../assets/images/logo-new.png';
import PrinterTransaction from "./PrinterTransaction";

const printers = [
  { id: "P001", name: "Laser Brother HL-L2321D", code: "BK-LTK-001", location: "B1-110", pending: 3, inProgress: 2 },
  { id: "P002", name: "Samsung SL-M2070FW", code: "BK-LTK-011", location: "C5-304", pending: 1, inProgress: 1 },
  { id: "P003", name: "Sony UP-X898MD A6", code: "BK-LTK-007", location: "A3", pending: 0, inProgress: 0 },
];

const printerTransactions = {
  P001: {
    pending: [
      { id: "T001", created: "2024-12-01 10:00", account: "UserA", printer: "P001", details: "In tài liệu A" },
    ],
    inProgress: [
      { id: "T002", created: "2024-12-01 09:30", account: "UserB", printer: "P001", details: "In tài liệu B" },
    ],
    completed: [
      { id: "T003", created: "2024-11-30 15:00", account: "UserC", printer: "P001", details: "In tài liệu C" },
    ],
  },
  // Các giao dịch của máy in khác...
};

const PrinterList = () => {
  const [selectedPrinter, setSelectedPrinter] = useState(null); // Declare state for selected printer

  const handleSelectPrinter = (printerId) => {
    setSelectedPrinter({ id: printerId, transactions: printerTransactions[printerId] });
  };

  const handleBack = () => {
    setSelectedPrinter(null);
  };

  return (
    <>
      {!selectedPrinter ? (
        <div className="tw-relative tw-container tw-mx-auto tw-w-3/5 tw-p-6 tw-min-h-max tw-bg-white tw-rounded-3xl tw-shadow-md tw-mt-8">
          {/* Header */}
          <div className="tw-flex tw-items-center tw-absolute tw-top-0 tw-left-1/2 tw-transform -tw-translate-x-1/2">
            <img className="tw-w-20" src={PrinterImg} alt="logo" />
            <p className="tw-text-center tw-text-customBlue tw-text-2xl tw-inline-block">Choose Printer</p>
          </div>

          {/* Dropdown chọn vị trí */}
          <div className="tw-mx-auto tw-text-center tw-text-customPurple tw-mt-16">
            <label>
              Pick a location:
              <select>
                <option value="CS1">Lý Thường Kiệt</option>
                <option value="CS2">Thủ Đức</option>
              </select>
            </label>
          </div>

          {/* Bảng danh sách máy in */}
          <div className="tw-overflow-auto tw-rounded-lg tw-shadow-md tw-border tw-mt-2 tw-bg-scroll tw-h-60">
            <table className="tw-min-w-full tw-border tw-rounded-lg">
              <thead className="tw-bg-gray-100">
                <tr>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Tên máy in</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Mã máy in</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Vị trí</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Giao dịch chờ</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Giao dịch thực hiện</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Chọn</th>
                </tr>
              </thead>
              <tbody>
                {printers.map((printer) => (
                  <tr key={printer.id} className="tw-border-b">
                    <td className="tw-px-6 tw-py-3">{printer.name}</td>
                    <td className="tw-px-6 tw-py-3">{printer.code}</td>
                    <td className="tw-px-6 tw-py-3 tw-font-bold">{printer.location}</td>
                    <td className="tw-px-6 tw-py-3">{printer.pending}</td>
                    <td className="tw-px-6 tw-py-3">{printer.inProgress}</td>
                    <td className="tw-px-6 tw-py-3">
                      <button
                        className="tw-border tw-rounded-md tw-text-customBlue tw-bg-white tw-p-1"
                        onClick={() => handleSelectPrinter(printer.id)}
                      >
                        Xem giao dịch
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <PrinterTransaction printerId={selectedPrinter.id} transactions={selectedPrinter.transactions} onBack={handleBack} />
      )}
    </>
  );
};

export default PrinterList;
