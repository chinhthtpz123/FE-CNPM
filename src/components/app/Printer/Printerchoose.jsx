import Nav from "../../layout/Nav";
import Footer from "../../layout/Footer";
import PrinterImg from "../../../assets/images/logo-new.png";
import { useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { Link } from "react-router-dom";
const PrinterChoosen = () => {
  const [printerList, setPrinterList] = useState([
    { id: 1, name: "Máy in 1", code: "PIN001", location: "Lý Thường Kiệt", status: "ONLINE" },
    { id: 2, name: "Máy in 2", code: "PIN002", location: "Thủ Đức", status: "OFFLINE" },
  ]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  const transactionList = [
    { id: "TX001", date: "2024-12-01", status: "Completed" },
    { id: "TX002", date: "2024-12-02", status: "Pending" },
  ];

  const handlePrinterSelection = (printer) => {
    setSelectedPrinter(printer);
  };

  return (
    <>
      <Nav />
      <div className="tw-mt-20 tw-relative tw-container tw-mx-auto tw-w-3/5 tw-p-6 tw-min-h-max tw-bg-white tw-rounded-3xl tw-shadow-md ">
        <div className="tw-flex tw-items-center tw-absolute tw-top-0 tw-left-1/2 tw-transform -tw-translate-x-1/2">
          <img className="tw-w-20" src={PrinterImg} alt="logo" />
          <p className="tw-text-center tw-text-customBlue tw-text-2xl tw-inline-block tw-font-bold tw-mt-5">
            Chọn Máy In
          </p>
        </div>

        {!selectedPrinter ? (
          <div className="tw-overflow-auto tw-rounded-lg tw-shadow-md tw-border tw-mt-16 tw-bg-scroll tw-h-50">
            <table className="tw-min-w-full tw-border tw-rounded-lg">
              <thead className="tw-bg-gray-100">
                <tr>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Tên máy in</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Mã máy in</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Vị trí</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Trạng thái</th>
                  <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">Chọn</th>
                </tr>
              </thead>
              <tbody>
                {printerList.map((printer) => (
                  <tr key={printer.id} className="tw-border-b">
                    <td className="tw-px-6 tw-py-3">{printer.name}</td>
                    <td className="tw-px-6 tw-py-3">{printer.code}</td>
                    <td className="tw-px-6 tw-py-3 tw-font-bold">{printer.location}</td>
                    <td className="tw-px-6 tw-py-3">
                      <span
                        className={`tw-inline-block tw-px-3 tw-py-1 tw-border tw-text-sm tw-font-semibold tw-rounded-full ${
                          printer.status === "ONLINE"
                            ? "tw-bg-green-100 tw-text-green-600"
                            : "tw-bg-red-100 tw-text-red-600"
                        }`}
                      >
                        {printer.status}
                      </span>
                    </td>
                    <td className="tw-px-6 tw-py-3">
                      <button className="tw-bg-blue-500 tw-text-white tw-rounded-full tw-px-2 tw-py-2">
                        <Link to={"/inforprinter"}><HiPrinter className=" tw-text-white" />{" "}{" "}</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2 className="tw-text-center tw-mb-4 tw-text-lg tw-font-bold">
              Giao Dịch của Máy In: {selectedPrinter.name}
            </h2>
            <div className="tw-overflow-auto tw-rounded-lg tw-shadow-md tw-border tw-mt-2 tw-bg-scroll tw-h-50">
              <table className="tw-min-w-full tw-border tw-rounded-lg">
                <thead className="tw-bg-gray-100">
                  <tr>
                    <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                      Mã giao dịch
                    </th>
                    <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                      Ngày
                    </th>
                    <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionList.map((transaction) => (
                    <tr key={transaction.id} className="tw-border-b">
                      <td className="tw-px-6 tw-py-3">{transaction.id}</td>
                      <td className="tw-px-6 tw-py-3">{transaction.date}</td>
                      <td className="tw-px-6 tw-py-3">{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setSelectedPrinter(null)}
              className="tw-mt-4 tw-bg-gray-500 tw-text-white tw-rounded-lg tw-px-4 tw-py-2"
            >
              Quay lại
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PrinterChoosen;