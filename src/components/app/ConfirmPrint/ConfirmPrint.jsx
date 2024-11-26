import React from "react";
import '../../../input.css';

const TransactionConfirmation = () => {
  const files = [
    { name: "Software-Engineer-document.pdf", size: "100 KB", pages: 100, status: "Valid" },
    { name: "Database-System-document.pdf", size: "30 MB", pages: 20, status: "Invalid" },
    { name: "Web-Programming-document.pdf", size: "100 MB", pages: 50, status: "" },
  ];

  return (
    <div className="transaction-confirmation-page">
      <div className="container">
        <h1>Xác nhận giao dịch</h1>
        <p>Thời gian in dự kiến: <strong>10 phút</strong></p>
        <p>Thời gian hoàn thành dự kiến: <strong>10:45, 15/10/2023</strong></p>
        <p>Số lượng file: <strong>3</strong></p>
        <table>
          <thead>
            <tr>
              <th>Tên tài liệu</th>
              <th>Kích thước</th>
              <th>Số trang</th>
              <th>Hợp lệ</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td><a href="#">{file.name}</a></td>
                <td>{file.size}</td>
                <td>{file.pages}</td>
                <td className={file.status === "Valid" ? "status-valid" : file.status === "Invalid" ? "status-invalid" : "status-na"}>
                  {file.status === "Valid" ? "Valid" : file.status === "Invalid" ? "Invalid" : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons">
          <button>Xác nhận</button>
          <button>Quay lại</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
