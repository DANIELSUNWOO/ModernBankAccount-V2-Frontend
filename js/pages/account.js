/* ================================================
   JEONG Bank - account.js
   ================================================ */

let selectedTypeId = null;

function openCreateModal() {
  openModal("createModal");
}

function selectType(el, id) {
  document
    .querySelectorAll(".type-item")
    .forEach((item) => item.classList.remove("selected"));
  el.classList.add("selected");
  selectedTypeId = id;
}

function createAccount() {
  if (!selectedTypeId) {
    showToast("⚠️ 계좌 종류를 선택해주세요.");
    return;
  }
  showToast("✅ 계좌가 생성되었습니다!");
  closeModal("createModal");
  selectedTypeId = null;
  document
    .querySelectorAll(".type-item")
    .forEach((el) => el.classList.remove("selected"));
}

function confirmDelete(accountNumber) {
  if (
    confirm(
      `${maskAccountNumber(accountNumber)} 계좌를 해지하시겠습니까?\n해지된 계좌는 복구되지 않습니다.`,
    )
  ) {
    showToast("✅ 계좌가 해지되었습니다.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initModalClose("createModal");
});
