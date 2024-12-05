import Nav from "../../layout/Nav";
import Footer from "../../layout/Footer";
import PrinterImg from "../../../assets/images/logo-new.png";
import { useState } from "react";
import { HiPrinter } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrinterChoosen = () => {
  const [printerList, setPrinterList] = useState([
    {
      id: 1,
      name: "Máy in 1",
      code: "PIN001",
      location: "Lý Thường Kiệt",
      status: "ONLINE",
    },
    {
      id: 2,
      name: "Máy in 2",
      code: "PIN002",
      location: "Thủ Đức",
      status: "OFFLINE",
    },
  ]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  const handlePrinterSelection = (printer) => {
    setSelectedPrinter(printer); // Cập nhật máy in đã chọn
    navigate("/inforprinter", { state: { printer,  } }); // Điều hướng đến trang /inforprinter và truyền state
  };
  const navigate = useNavigate();
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

        <div className="tw-overflow-auto tw-rounded-lg tw-shadow-md tw-border tw-mt-16 tw-bg-scroll tw-h-50">
          <table className="tw-min-w-full tw-border tw-rounded-lg">
            <thead className="tw-bg-gray-100">
              <tr>
                <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                  Tên máy in
                </th>
                <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                  Mã máy in
                </th>
                <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                  Vị trí
                </th>
                <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                  Trạng thái
                </th>
                <th className="tw-px-6 tw-py-3 tw-border-b tw-text-left">
                  Chọn
                </th>
              </tr>
            </thead>
            <tbody>
              {printerList.map((printer) => (
                <tr key={printer.id} className="tw-border-b">
                  <td className="tw-px-6 tw-py-3">{printer.name}</td>
                  <td className="tw-px-6 tw-py-3">{printer.code}</td>
                  <td className="tw-px-6 tw-py-3 tw-font-bold">
                    {printer.location}
                  </td>
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
                    <button className="tw-bg-blue-500 tw-text-white tw-rounded-full tw-px-1 tw-py-0">
                      <button onClick={() => handlePrinterSelection(printer)}>
                        <HiPrinter className="tw-text-white tw-justify-center" />{" "}
                      </button>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrinterChoosen;
