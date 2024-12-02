import React, { useState, useRef } from 'react';
import Header from '../../layout/Nav';
import imageHcmut from '../../../../public/images/HCMUT-BachKhoa-logo.png';



const files = [
  { id: 1, name: 'file1.txt', size: 1024 },
  { id: 2, name: "file2.txt", size: 1024},
]

const PrintSettings = () => {
  const [orientation, setOrientation] = useState('doc');
  const [pageSize, setPageSize] = useState('A4');
  const [numberOfCopies, setNumberOfCopies] = useState(1);
  const [fromPage, setFromPage] = useState(1);
  const [toPage, setToPage] = useState(10);
  const [margins, setMargins] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const [activeFile, setActiveFile] = useState(files[0].name);

  const handleNumberChange = (e, setter) => {
    const value = Math.max(0, e.target.value); // Không cho phép số nhỏ hơn 0
    setter(value);
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const handleOnClick= (item) => {
    setActiveFile(item.name);
  }

  return (
    <>
     <Header />
     <div className="tw-flex tw-ml-[240px] tw-mt-[73px]">
      <div className="tw-border tw-border-gray-200 tw-h-full tw-shadow-md tw-mt-12 tw-p-4 tw-rounded-lg">
        <div className="tw-text-2xl tw-font-medium tw-text-customBlue tw-mb-3">Danh sach file</ div>
        {files && files.length > 0 && files.map((item, index) => {
          return (
            <div key={index} 
              className={activeFile === item.name ? "tw-flex tw-items-center tw-justify-between tw-min-w-max tw-p-2 tw-space-x-3 tw-bg-blue-50 tw-text-blue-500 tw-rounded-md" :
                "tw-flex tw-items-center tw-justify-between tw-w-full tw-space-x-3 tw-p-2 tw-text-gray-700"
              }>
              <p className={activeFile === item.name ? "tw-block tw-text-lg tw-mb-0 tw-text-blue-500" :
                "tw-block tw-text-lg tw-mb-0 tw-text-gray-700"
              }>{item.name}</p>
              <button className="tw-p-2 tw-border tw-border-gray-200 tw-rounded-md"
                onClick={() => handleOnClick(item)}>Chon file </button> 
            </div>
          )
        })}
      </div>

      <div className="tw-flex-1 tw-ml-[10%] print-settings-page tw-mt-12">
        <div className="print-settings">
          <div className="title">🖨Tùy chỉnh thông số in🖨</div>
          <div className="container">
            {/* Phần Xem Trước */}
            <div className="preview">
              <div className="preview-label">Xem trước</div>
              <div className={`preview-box ${orientation}`} />
              <img className="preview-logo" src={imageHcmut} alt="Logo" />
            </div>

            {/* Phần Thiết lập Thông số */}
            <div className="settings">
              <label className="label">
                <span className="label-title">Số bản:</span>
                <input
                  type="number"
                  value={numberOfCopies}
                  onChange={(e) => handleNumberChange(e, setNumberOfCopies)}
                />
              </label>
              <label className="label">
                <span className="label-title">Kích thước:</span>
                <select value={pageSize} onChange={handlePageSizeChange}>
                  <option>A3</option>
                  <option>A4</option>
                  <option>A5</option>
                </select>
              </label>
              <label className="label">
                <span className="label-title">In từ trang:</span>
                <input
                  type="number"
                  value={fromPage}
                  onChange={(e) => handleNumberChange(e, setFromPage)}
                />
              </label>
              <label className="label">
                <span className="label-title">Đến trang:</span>
                <input
                  type="number"
                  value={toPage}
                  onChange={(e) => handleNumberChange(e, setToPage)}
                />
              </label>

              {/* Tiêu đề Hướng In */}
              <div className="label">
                <span className="label-title radio-group-title">Hướng in</span>
                <div className="radio-group">
                  <input
                    type="radio"
                    id="doc"
                    name="orientation"
                    value="doc"
                    checked={orientation === 'doc'}
                    onChange={handleOrientationChange}
                  />
                  <label htmlFor="doc">Dọc</label>
                  <input
                    type="radio"
                    id="ngang"
                    name="orientation"
                    value="ngang"
                    checked={orientation === 'ngang'}
                    onChange={handleOrientationChange}
                  />
                  <label htmlFor="ngang">Ngang</label>
                </div>
              </div>

              {/* Phần Canh Lề */}
              <div className="margin-settings">
                <div className="margin-settings-title">Canh lề (inch)</div>
                <div className="margin-row">
                  <label>
                    <span className="label-title">Trái:</span>
                    <input
                      type="number"
                      value={margins.left}
                      onChange={(e) => handleNumberChange(e, (value) => setMargins({ ...margins, left: value }))}
                    />
                  </label>
                  <label>
                    <span className="label-title">Phải:</span>
                    <input
                      type="number"
                      value={margins.right}
                      onChange={(e) => handleNumberChange(e, (value) => setMargins({ ...margins, right: value }))}
                    />
                  </label>
                </div>
                <div className="margin-row">
                  <label>
                    <span className="label-title">Trên:</span>
                    <input
                      type="number"
                      value={margins.top}
                      onChange={(e) => handleNumberChange(e, (value) => setMargins({ ...margins, top: value }))}
                    />
                  </label>
                  <label>
                    <span className="label-title">Dưới:</span>
                    <input
                      type="number"
                      value={margins.bottom}
                      onChange={(e) => handleNumberChange(e, (value) => setMargins({ ...margins, bottom: value }))}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Phần Lưu tài liệu */}
          <div className="save-option">
            <input type="checkbox" id="save-doc" />
            <label htmlFor="save-doc">Lưu tài liệu in trong 7 ngày</label>
          </div>

          {/* Các nút hành động */}
          <div className="buttons">
            <button>Xác nhận</button>
            <button>Quay lại</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PrintSettings;
