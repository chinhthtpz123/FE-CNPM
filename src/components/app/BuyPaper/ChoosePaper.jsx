import React, { useState } from 'react';
import Header from '../../layout/Nav';
import Footer from '../../layout/Footer';

const ChoosePaper = () => {
    const ChoosePaper = [
      { name: "A3", width: "42.00 cm", height: "29.70 cm", price: "500 VNĐ" },
      { name: "A4", width: "29.70 cm", height: "21.00 cm", price: "400 VNĐ" },
      { name: "A5", width: "21.00 cm", height: "14.80 cm", price: "200 VNĐ" },
    ];

    const [activeCard, setActiveCard] = useState(null); // Lưu trữ ID của card được chọn

    const handleCardClick = (index) => {
      setActiveCard(index); // Cập nhật ID của card được click
    };

    return (
      <>
      <Header />
    <div className="choose-paper-container">
      <h2 className="choose-paper-header">Mua giấy in</h2>
      <p className="choose-paper-header-title">Vui lòng chọn loại giấy muốn mua!</p>
      <div className="choose-paper-content">
        {ChoosePaper.map((paper, index) => (
          <div key={index} 
          // className="card"
          className={`card ${activeCard === index ? "active" : ""}`}
          onClick={() => handleCardClick(index)}
          >
            <div className="card-body">
              <h3>Giấy {paper.name}</h3>
              <p>Kích thước: {paper.width} x {paper.height}</p>
              <p>Giá: {paper.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Các nút hành động */}
      <div className="buttons">
          <button>Tiếp tục</button>
          <button>Quay lại</button>
        </div>
    </div>
    <Footer />
    </>
  );
    //   <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
    //     <h2 className="text-lg font-bold text-blue-600 text-center mb-6">Mua giấy in</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {ChoosePaper.map((paper, index) => (
    //         <div
    //           key={index}
    //           className="border rounded-lg p-4 bg-gray-50 flex flex-col items-center text-center shadow hover:shadow-md"
    //         >
    //           <div className="relative w-full border rounded-lg bg-white mb-4 aspect-w-4 aspect-h-3">
    //             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">
    //               <span className="text-2xl font-bold">{paper.name}</span>
    //             </div>
    //             <div className="absolute top-0 left-0 text-xs text-blue-500 p-1">
    //               {paper.width}
    //             </div>
    //             <div className="absolute bottom-0 left-0 text-xs text-blue-500 p-1">
    //               {paper.height}
    //             </div>
    //           </div>
    //           <p className="text-sm text-blue-600">Giấy in khổ {paper.name} {paper.price}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
  };
  
  export default ChoosePaper;
  