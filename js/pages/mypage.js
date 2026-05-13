/* ================================================
   JEONG Bank - mypage.js
   ================================================ */

function saveInfo() {
  showToast("✅ 정보가 성공적으로 수정되었습니다");
}

function confirmWithdraw() {
  if (
    confirm(
      "정말 회원 탈퇴를 하시겠습니까?\n탈퇴 시 모든 데이터가 삭제되며 복구되지 않습니다.",
    )
  ) {
    showToast("회원 탈퇴가 완료되었습니다.");
    setTimeout(() => goTo("../index.html"), 2000);
  }
}
