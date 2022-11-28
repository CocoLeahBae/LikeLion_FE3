// 선택한 음료수 목록 생성

/*
 * 1. 입금 버튼 기능
 * */

// 1-1. 입금액을 입력하고 입금 버튼을 누르면 소지금 == 소지금 - 입금액, 잔액 == 기존 잔액 + 입금액이 됩니다.
const inputCost = document.querySelector(".inp-put");
const btnPut = document.querySelector(".btn-put");
const txtBalance = document.querySelector(".txt-balance");
const myMoney = document.querySelector(".txt-mymoney");

btnPut.addEventListener("click", () => {
    // 입금액은 0원 이상이어야 한다.
    if (inputCost.value < 0 || inputCost.value == "") {
        alert("뭐하냐");
    } // 1-2. 입금액이 소지금 보다 많다면 실행을 중단하고 "소지금이 부족합니다." 라고 쓰인 경고창을 띄웁니다.
    else if (
        parseInt(inputCost.value) >
        parseInt(myMoney.textContent.split(",").join(""))
    ) {
        alert("소지금이 부족합니다.");
    } else {
        myMoney.textContent =
            (
                parseInt(myMoney.textContent.split(",").join("")) -
                parseInt(inputCost.value)
            ).toLocaleString() + "원";
        // 잔액 == 기존 잔액 + 입금액
        txtBalance.textContent =
            (
                parseInt(txtBalance.textContent) + parseInt(inputCost.value)
            ).toLocaleString() + "원";
    }
    // 1-3. 입금액 인풋창은 초기화됩니다.
    inputCost.value = null;
});

/*
 * 2. 거스름돈 반환 버튼 기능
 * 반환 버튼을 누르면 소지금 == 소지금 + 잔액이 됩니다.
 * 반환 버튼을 누르면 잔액 창은 초기화됩니다.
 */
const btnReturn = document.querySelector(".btn-return");
btnReturn.addEventListener("click", () => {
    myMoney.textContent =
        (
            parseInt(myMoney.textContent.split(",").join("")) +
            parseInt(txtBalance.textContent.split(",").join(""))
        ).toLocaleString() + "원";
    // 거스름돈 반환을 하면 잔액은 '0원'이 되어야 한다.
    txtBalance.textContent = "0원";
});

/*
 * 3. 자판기 메뉴 기능
 */

// 3-1. 아이템 가격보다 잔액이 적다면 "잔액이 부족합니다. 돈을 입금해주세요" 경고창이 나타납니다.
const btnItem = document.querySelectorAll(".btn-item");
btnItem.forEach((item) => {
    const itemPrice = item.attributes["data-price"].nodeValue;
    item.addEventListener("click", () => {
        if (
            parseInt(itemPrice) >
            parseInt(txtBalance.textContent.split(",").join(""))
        ) {
            alert("돈 부족");
        }
    });
});

// 3-2. 아이템을 누르면 잔액 == 잔액 - 아이템 가격이 됩니다.
// 3-3. 아이템이 획득가능 창에 등록됩니다.
// 3-4. 아이템 버튼의 data-count 값이 -1 됩니다.
// 3-5. 만약 data-count 값이 0 이라면 부모 li에 sold-out 클래스를 붙여줍니다.

/**
 * 4. 획득 버튼 기능
 * 획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 목록으로 이동합니다.
 * 획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.
 * 획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.
 * 획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.
 * 획득한 음료의 금액을 모두 합하여 총금액을 업데이트 합니다.
 */
