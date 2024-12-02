
import React from "react";
import Header from "../../layout/Nav";
import Footer from "../../layout/Footer";
import PrinterImg from '../../../assets/images/logo-new.png';

const printers = [
  {
    name: "Laser Brother HL-L2321D",
    code: "BK-LTK-001",
    location: "B1-110",
    status: "Available",
  },
  {
    name: "Samsung SL-M2070FW",
    code: "BK-LTK-011",
    location: "C5-304",
    status: "Not available",
  },
  {
    name: "Sony UP-X898MD A6",
    code: "BK-LTK-007",
    location: "A3",
    status: "Not available",
  },
];

const Printer = () => {
  return (
    <>
    <Header />
    <div className="tw-relative tw-container tw-mx-auto tw-w-3/5 tw-p-6 tw-min-h-max tw-bg-white tw-rounded-3xl tw-shadow-md tw-mt-8">
      <div className="tw-flex tw-items-center tw-absolute tw-top-0 tw-left-1/2 tw-transform -tw-translate-x-1/2">
        <img className="tw-w-20" src={PrinterImg} alt="logo"/>
        <p className="tw-text-center tw-text-customBlue tw-text-2xl tw-inline-block ">Choose Printer</p>
      </div>
      
      <div className="tw-mx-auto tw-text-center tw-text-customPurple tw-mt-16" >
        <label className="tw-text-center tw-mx-auto">
          Pick a location:
          <select>
            <option value="CS1">Lý Thường Kiệt</option>
            <option value="CS2">Thủ Đức</option>
          </select>
        </label>
      </div>
      
      <div className="tw-overflow-auto tw-rounded-lg tw-shadow-md tw-border tw-mt-2 tw-bg-scroll tw-h-50">
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
            {printers.map((printer, index) => (
              <tr key={index} className="tw-border-b">
                <td className="tw-px-6 tw-py-3">{printer.name}</td>
                <td className="tw-px-6 tw-py-3">{printer.code}</td>
                <td className="tw-px-6 tw-py-3 tw-font-bold">{printer.location}</td>
                <td className="tw-px-6 tw-py-3">
                  <span
                    className={`tw-inline-block tw-px-3 tw-py-1 tw-border tw-text-sm tw-font-semibold tw-rounded-lg ${
                      printer.status === "Available"
                        ? "tw-bg-green-100 tw-text-green-600"
                        : "tw-bg-red-100 tw-text-red-600"
                    }`}
                  >
                    {printer.status}
                  </span>
                </td>
                <td className="tw-px-6 tw-py-3">
                  <label className="tw-flex tw-items-center">
                    <input type="radio" name="printer" className="tw-mr-2" />
                    Xác nhận
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tw-flex tw-space-x-9 tw-items-center tw-justify-center tw-mt-8 ">
        <button className="tw-border tw-border-gray-100 tw-rounded-md tw-text-customBlue tw-bg-white tw-p-1">Quay lại</button>
        <button className="tw-border tw-border-gray-100 tw-rounded-md tw-text-customBlue tw-bg-white tw-p-1">Xác Nhận</button>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default Printer;
