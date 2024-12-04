
import  { useState } from 'react';
import Header from '../../layout/Nav';
import imageHcmut from '../../../../public/images/HCMUT-BachKhoa-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTransactionStore } from './PrintTransactionStore';





const PrintSettings = () => {
  const {newDocuments,updateDocumentSetting} = useTransactionStore();
  const[currentFileIdx, setCurrentFileIdx] = useState(0);
  const navigate = useNavigate();
  
  const selectedFile = newDocuments[currentFileIdx].metadata.detail;
 
  const handleOnClick = () => {
    navigate('/upload/confirm', {replace: true});
  }

  const handleOnBackPage = () => {
    navigate('/upload/printer', {replace: true})
  }
  
  return (
    <>
     <Header />
     <div className="tw-flex tw-ml-[240px] tw-mt-[73px]">
      <div className="tw-border tw-border-gray-200 tw-h-full tw-shadow-md tw-mt-12 tw-p-4 tw-rounded-lg ">
        <div className="tw-text-2xl tw-font-medium tw-text-customBlue tw-mb-3">Danh sach file</ div>
        {newDocuments && newDocuments.length > 0 && newDocuments.map((item, index) => {
          return (
            <div key={index} 
              className={currentFileIdx === index ? "tw-flex tw-items-center tw-justify-between tw-min-w-max tw-p-2 tw-space-x-3 tw-bg-blue-50 tw-text-blue-500 tw-rounded-md" :
                "tw-flex tw-items-center tw-justify-between tw-w-full tw-space-x-3 tw-p-2 tw-text-gray-700"
              }>
              <p className={currentFileIdx === index ? "tw-block tw-min-w-16 tw-max-w-32 tw-text-lg tw-mb-0 tw-text-blue-500 tw-text-ellipsis tw-overflow-hidden" :
                "tw-min-w-16 tw-max-w-32 tw-block tw-text-lg tw-mb-0 tw-text-gray-700 tw-text-ellipsis tw-overflow-hidden"
              }>{item.metadata.name}</p>
              <button className="tw-p-2 tw-border tw-border-gray-200 tw-rounded-md"
                onClick={() => setCurrentFileIdx(index)}>Chon file </button> 
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
              <div className={`preview-box ${selectedFile.isLandscape?'ngang':'doc'}`} />
              <img className="preview-logo" src={imageHcmut} alt="Logo" />
            </div>

            {/* Phần Thiết lập Thông số */}
            <div className="settings">
              <label className="label">
                <span className="label-title">Số bản:</span>
                <input
                  type="number"
                  value={selectedFile.numOfCopies}
                  onChange={(e) =>
                    updateDocumentSetting(currentFileIdx,"numOfCopies",Math.max(1, e.target.value),true)
                  }
                />
              </label>
              <label className="label">
                <span className="label-title">Loại giấy:</span>
                <select value={selectedFile.paperType} onChange={(e) =>
                    updateDocumentSetting(currentFileIdx,"paperType",e.target.value,true)
                  }>
                  <option>A3</option>
                  <option>A4</option>
                  <option>A5</option>
                </select>
              </label>
              <label className="label">
                <span className="label-title">In từ trang:</span>
                <input
                  type="number"
                  value={selectedFile.fromPage}
                  onChange={(e) =>
                    updateDocumentSetting(currentFileIdx,"fromPage",Math.max(1, e.target.value),true)
                  }
                />
              </label>
              <label className="label">
                <span className="label-title">Đến trang:</span>
                <input
                  type="number"
                  value={selectedFile.toPage}
                  onChange={(e) =>
                    updateDocumentSetting(currentFileIdx,"toPage",Math.max(1, e.target.value),true)
                  }
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
                    checked={selectedFile.isLandscape === false}
                    onChange={() =>
                      updateDocumentSetting(currentFileIdx,"isLandscape",false,true)
                    }
                  />
                  <label htmlFor="doc">Dọc</label>
                  <input
                    type="radio"
                    id="ngang"
                    name="orientation"
                    value="ngang"
                    checked={selectedFile.isLandscape === true}
                    onChange={() =>
                      updateDocumentSetting(currentFileIdx,"isLandscape",true,true)}
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
                      value={selectedFile.leftSide}
                      onChange={(e) =>
                        updateDocumentSetting(currentFileIdx,"leftSide",Math.max(1, e.target.value),true)

                      }
                    />
                  </label>
                  <label>
                    <span className="label-title">Phải:</span>
                    <input
                      type="number"
                      value={selectedFile.rightSide}
                      onChange={(e) =>
                        updateDocumentSetting(currentFileIdx,"rightSide",Math.max(1, e.target.value),true)
                      }
                    />
                  </label>
                </div>
                <div className="margin-row">
                  <label>
                    <span className="label-title">Trên:</span>
                    <input
                      type="number"
                      value={selectedFile.topSide}
                      onChange={(e) =>
                        updateDocumentSetting(currentFileIdx,"topSide",Math.max(1, e.target.value),true)
                      }
                    />
                  </label>
                  <label>
                    <span className="label-title">Dưới:</span>
                    <input
                      type="number"
                      value={selectedFile.bottomSide}
                      onChange={(e) =>
                        updateDocumentSetting(currentFileIdx,"bottomSide",Math.max(1, e.target.value),true)
                      }
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
            <button onClick={handleOnClick}>
              Xác Nhận 
            </button>
            <button onClick={handleOnBackPage}>Quay lại</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PrintSettings;
