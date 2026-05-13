/* ================================================
   JEONG Bank - history.js
   ================================================ */

function setFilter(btn, type) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const items = document.querySelectorAll(".history-item");
  items.forEach((item) => {
    if (type === "all") {
      item.style.display = "flex";
    } else if (type === "suspicious") {
      item.style.display = item.dataset.type.includes("suspicious")
        ? "flex"
        : "none";
    } else {
      item.style.display = item.dataset.type.includes(type) ? "flex" : "none";
    }
  });
}

function openDetail(type, holder, amount, status, suspicious) {
  const isOut = type === "send";
  document.getElementById("modalTitle").textContent = isOut
    ? "송금 상세"
    : "수신 상세";

  const modalAmount = document.getElementById("modalAmount");
  modalAmount.textContent = (isOut ? "- " : "+ ") + "₩ " + amount;
  modalAmount.className = "detail-amount " + (isOut ? "out" : "in");

  document.getElementById("modalType").textContent = isOut ? "송금" : "수신";
  document.getElementById("modalHolder").textContent = holder;

  const statusMap = {
    COMPLETED: "완료",
    PENDING: "승인 대기",
    REJECTED: "거절됨",
  };
  document.getElementById("modalStatus").textContent =
    statusMap[status] || status;
  document.getElementById("modalSuspicious").textContent = suspicious
    ? "⚠️ 의심 거래"
    : "정상";

  openModal("modal");
}

document.addEventListener("DOMContentLoaded", function () {
  initModalClose("modal");
});
