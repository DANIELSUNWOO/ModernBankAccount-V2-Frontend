/* ================================================
   JEONG Bank - pending.js
   ================================================ */

function handleApprove(cardId, sender, amount) {
  if (
    confirm(
      `${sender} 님의 ${formatAmount(amount)} 이체 요청을 승인하시겠습니까?\n\n승인 후 즉시 이체가 완료됩니다.`,
    )
  ) {
    const card = document.getElementById(cardId);
    card.style.opacity = "0.5";
    card.style.pointerEvents = "none";
    setTimeout(() => {
      card.remove();
      checkEmpty();
      showToast("✅ 승인이 완료되었습니다. 이체가 진행됩니다.");
    }, 300);
  }
}

function handleReject(cardId, sender) {
  if (confirm(`${sender} 님의 이체 요청을 거절하시겠습니까?`)) {
    const card = document.getElementById(cardId);
    card.style.opacity = "0.5";
    card.style.pointerEvents = "none";
    setTimeout(() => {
      card.remove();
      checkEmpty();
      showToast("✅ 거절이 완료되었습니다.");
    }, 300);
  }
}

function checkEmpty() {
  const list = document.getElementById("pendingList");
  if (list && list.children.length === 0) {
    list.innerHTML = `
      <div class="empty">
        <div class="empty-icon">✅</div>
        <div class="empty-title">대기 중인 요청이 없습니다</div>
        <div class="empty-desc">모든 이체 요청을 처리했습니다.<br>새로운 요청이 오면 여기에 표시됩니다.</div>
      </div>
    `;
  }
}
