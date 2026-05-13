/* ================================================
   JEONG Bank - Common JS
   모든 페이지에서 공통으로 사용하는 유틸리티
   ================================================ */

/* ------------------------------------------------
   금액 포맷 (1000 → ₩ 1,000)
   ------------------------------------------------ */
function formatAmount(amount) {
  return "₩ " + Number(amount).toLocaleString();
}

/* ------------------------------------------------
   날짜 포맷 (Date → 2026.05.13)
   ------------------------------------------------ */
function formatDate(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

/* ------------------------------------------------
   날짜 + 시간 포맷 (Date → 2026.05.13 03:03)
   ------------------------------------------------ */
function formatDateTime(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${y}.${m}.${day} ${h}:${min}`;
}

/* ------------------------------------------------
   실시간 시계 (dashboard에서 사용)
   ------------------------------------------------ */
function startClock(dateId, timeId) {
  function update() {
    const now = new Date();
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dateEl = document.getElementById(dateId);
    const timeEl = document.getElementById(timeId);
    if (dateEl) {
      dateEl.textContent = `${now.getMonth() + 1}월 ${now.getDate()}일 (${days[now.getDay()]})`;
    }
    if (timeEl) {
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      timeEl.textContent = `${h}:${m}`;
    }
  }
  update();
  setInterval(update, 1000);
}

/* ------------------------------------------------
   토스트 메시지
   ------------------------------------------------ */
function showToast(message, duration = 3000) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

/* ------------------------------------------------
   모달 열기 / 닫기
   ------------------------------------------------ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("show");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("show");
}

/* 모달 외부 클릭 시 닫기 */
function initModalClose(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) closeModal(id);
    });
  }
}

/* ------------------------------------------------
   계좌번호 마스킹 (JEONG-1234567890-3586 → JEONG-****-3586)
   ------------------------------------------------ */
function maskAccountNumber(accountNumber) {
  const parts = accountNumber.split("-");
  if (parts.length === 3) {
    return `${parts[0]}-****-${parts[2]}`;
  }
  return accountNumber;
}

/* ------------------------------------------------
   입력값 유효성 검사
   ------------------------------------------------ */
function validateAmount(amount) {
  if (!amount || isNaN(amount) || Number(amount) <= 0) {
    showToast("⚠️ 올바른 금액을 입력해주세요.");
    return false;
  }
  return true;
}

function validateAccountNumber(accountNumber) {
  if (!accountNumber || accountNumber.trim() === "") {
    showToast("⚠️ 계좌번호를 입력해주세요.");
    return false;
  }
  return true;
}

/* ------------------------------------------------
   로그아웃
   ------------------------------------------------ */
function logout() {
  if (confirm("로그아웃 하시겠습니까?")) {
    window.location.href = "../pages/login.html";
  }
}

/* ------------------------------------------------
   페이지 이동
   ------------------------------------------------ */
function goTo(url) {
  window.location.href = url;
}
