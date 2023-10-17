/* test.js */

// 작업의 계속 유무 체크
function yncheck1() {
    yn = confirm("작업을 계속하시겠습니까?")
    if(yn) {
      alert("작업을 계속 진행합니다.");
    }
    else {
      alert("작업을 마칩니다.")
    }
}
