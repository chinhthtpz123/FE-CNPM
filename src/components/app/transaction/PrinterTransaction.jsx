import React, { useState } from "react";

const PrinterTransaction = ({ printerId, onBack, transactions }) => {
  const [activeTab, setActiveTab] = useState("pending");
  const [localTransactions, setLocalTransactions] = useState(transactions);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleConfirm = (transactionId) => {
    setLocalTransactions((prev) => {
      const updatedPending = prev.pending.filter((t) => t.id !== transactionId);
      const confirmedTransaction = prev.pending.find((t) => t.id === transactionId);
      return {
        ...prev,
        pending: updatedPending,
        inProgress: [...prev.inProgress, confirmedTransaction],
      };
    });
  };

  const handleComplete = (transactionId) => {
    setLocalTransactions((prev) => {
      const updatedInProgress = prev.inProgress.filter((t) => t.id !== transactionId);
      const completedTransaction = prev.inProgress.find((t) => t.id === transactionId);
      return {
        ...prev,
        inProgress: updatedInProgress,
        completed: [...prev.completed, completedTransaction],
      };
    });
  };

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="printer-transaction tw-container tw-mx-auto tw-p-6">
      <h2 className="tw-text-center tw-text-customBlue tw-text-2xl">Giao dịch của {printerId}</h2>
      <button className="tw-mb-4 tw-border tw-rounded-md tw-bg-white tw-p-1" onClick={onBack}>
        Quay lại danh sách
      </button>

      {/* Tabs */}
      <div className="tw-flex tw-gap-2 tw-mb-4">
        {["pending", "inProgress", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tw-px-4 tw-py-2 ${activeTab === tab ? "tw-bg-blue-500 tw-text-white" : "tw-bg-gray-200"}`}
          >
            {tab === "pending" ? "Chờ xác nhận" : tab === "inProgress" ? "Đang thực hiện" : "Đã hoàn thành"}
          </button>
        ))}
      </div>

      {/* Nội dung tab */}
      <div className="tab-content">
        {localTransactions[activeTab].length > 0 ? (
          localTransactions[activeTab].map((t) => (
            <div key={t.id} className="tw-p-4 tw-border-b">
              <p><strong>Thời gian:</strong> {t.created}</p>
              <p><strong>Tài khoản:</strong> {t.account}</p>
              <p><strong>Chi tiết:</strong> {t.details}</p>
              {activeTab === "pending" && (
                <button className="tw-px-2 tw-py-1 tw-bg-green-500 tw-text-white" onClick={() => handleConfirm(t.id)}>
                  Xác nhận
                </button>
              )}
              {activeTab === "inProgress" && (
                <button className="tw-px-2 tw-py-1 tw-bg-blue-500 tw-text-white" onClick={() => handleComplete(t.id)}>
                  Hoàn tất
                </button>
              )}
              <button className="tw-ml-2 tw-px-2 tw-py-1 tw-bg-gray-500 tw-text-white" onClick={() => handleViewDetails(t)}>
                Xem chi tiết
              </button>
            </div>
          ))
        ) : (
          <p>Không có giao dịch trong danh mục này.</p>
        )}
      </div>

      {/* Modal hiển thị chi tiết */}
      {selectedTransaction && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center">
          <div className="tw-bg-white tw-p-6 tw-rounded">
            <h3 className="tw-text-xl tw-font-bold">Chi tiết giao dịch</h3>
            <p><strong>Mã giao dịch:</strong> {selectedTransaction.id}</p>
            <p><strong>Thời gian:</strong> {selectedTransaction.created}</p>
            <p><strong>Tài khoản:</strong> {selectedTransaction.account}</p>
            <p><strong>Chi tiết:</strong> {selectedTransaction.details}</p>
            <button className="tw-mt-4 tw-bg-red-500 tw-text-white tw-px-4 tw-py-2" onClick={handleCloseModal}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterTransaction;
