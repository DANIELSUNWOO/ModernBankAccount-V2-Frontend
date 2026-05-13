/* ================================================
   JEONG Bank - transfer.js
   ================================================ */

function selectAccount(el) {
  document
    .querySelectorAll(".account-select-item")
    .forEach((item) => item.classList.remove("selected"));
  el.classList.add("selected");
}

function checkHolder() {
  const accountNum = document.getElementById("toAccountNumber").value.trim();
  if (!validateAccountNumber(accountNum)) return;

  const confirm = document.getElementById("holderConfirm");
  const holderName = document.getElementById("holderName");
  const summaryHolder = document.getElementById("summaryHolder");
  const summaryAccount = document.getElementById("summaryAccount");

  confirm.classList.add("show");
  holderName.textContent = "정선우";
  if (summaryHolder) summaryHolder.textContent = "정선우";
  if (summaryAccount)
    summaryAccount.textContent = maskAccountNumber(accountNum);
}

function addAmount(val) {
  const input = document.getElementById("amount");
  input.value = (parseInt(input.value) || 0) + val;
  updateSummary();
}

function clearAmount() {
  document.getElementById("amount").value = "";
  updateSummary();
}

function updateSummary() {
  const amount = parseInt(document.getElementById("amount").value) || 0;
  const summaryAmount = document.getElementById("summaryAmount");
  const hint = document.getElementById("amountHint");

  if (summaryAmount) summaryAmount.textContent = formatAmount(amount);

  if (hint) {
    if (amount > 0) {
      hint.textContent = `입력 금액: ${amount.toLocaleString()}원`;
      hint.style.color = "var(--text-pink)";
    } else {
      hint.textContent = "";
    }
  }
}

function submitTransfer() {
  const amount = parseInt(document.getElementById("amount").value) || 0;
  const accountNum = document.getElementById("toAccountNumber").value.trim();

  if (!validateAccountNumber(accountNum)) return;
  if (!validateAmount(amount)) return;

  if (
    confirm(`정선우 님의 계좌로\n${formatAmount(amount)}을 이체하시겠습니까?`)
  ) {
    showToast(
      "✅ 이체 요청이 완료되었습니다. 수신자의 승인을 기다리는 중입니다.",
    );
    setTimeout(() => goTo("dashboard.html"), 2000);
  }
}
