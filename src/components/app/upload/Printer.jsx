
import Header from "../../layout/Nav";
import Footer from "../../layout/Footer";
import PrinterImg from '../../../assets/images/logo-new.png';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const Printer = () => {
  const location = useLocation();
  const{newFilesUpload=[]} = location.state||{};
  const [printerList,setPrinterList] = useState([]);
  const [selectedPrinterId,setSelectedPrinterId] = useState("");
  useEffect(()=>{
    const fetchPrinterList = async ()=>{
      const api = "http://localhost:8080/printers";
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzMxNDIwMTYsInN1YiI6IjY4Y2Y3MzFmLTI5NDYtNGIzYi05YjgwLTUzNDA1NWMxMTQyYiIsInNjb3BlIjoiY3VzdG9tZXIifQ.mDZybqSkNkXcCuAy28jfz5ySU_cGsPSZX7sc0YlluxY";
      const page = 1;
      const size = 10;
      const res = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          status: "ONLINE",
          page,
          size,
        }
      });
      if(res.status === 200) {
        setPrinterList(res.data.data.data.map((printer)=>({
          id: printer.id.value,
          name: printer.name,
          code: printer.code,
          location: printer.location,
          status: printer.status,
        })))
      } else{
        alert(res.data.message);
      }
    }
    fetchPrinterList();
  },[]);

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
            {printerList.map((printer) => (
              <tr key={printer.id} className="tw-border-b">
                <td className="tw-px-6 tw-py-3">{printer.name}</td>
                <td className="tw-px-6 tw-py-3">{printer.code}</td>
                <td className="tw-px-6 tw-py-3 tw-font-bold">{printer.location}</td>
                <td className="tw-px-6 tw-py-3">
                  <span
                    className={`tw-inline-block tw-px-3 tw-py-1 tw-border tw-text-sm tw-font-semibold tw-rounded-lg ${
                      printer.status === "ONLINE"
                        ? "tw-bg-green-100 tw-text-green-600"
                        : "tw-bg-red-100 tw-text-red-600"
                    }`}
                  >
                    {printer.status}
                  </span>
                </td>
                <td className="tw-px-6 tw-py-3">
                  <label className="tw-flex tw-items-center" onClick={()=>{setSelectedPrinterId(printer.id)}}>
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
        <button className="tw-border tw-border-gray-100 tw-rounded-md tw-text-customBlue tw-bg-white tw-p-1">
          <Link to={"/printsetting"} state={{newFilesUpload,printerId: selectedPrinterId}}>Xác Nhận</Link>
          </button>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default Printer;
