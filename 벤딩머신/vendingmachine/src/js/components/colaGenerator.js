class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    setup() {
        this.loadData((json) => {
            this.colaFactory(json);
        });
    }

    loadData(callback) {
        const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성합니다.
        requestObj.open('GET', 'src/js/item.json'); // 요청 시작
        requestObj.onreadystatechange = () => { // readyState 가 변화하면 트리거

            if (requestObj.readyState === 4 && requestObj.status === 200) {
                callback(JSON.parse(requestObj.responseText));
            }
        }
        requestObj.send(null);
    }

    //     <li>
    //     <button type="button" class="btn-item" data-item="">
    //         <img src="src/images/Original_Cola.png" alt="" class="img-item">
    //             <strong class="tit-item">Original_Cola</strong>
    //             <span class="txt-price">1000원</span>
    //     </button>
    // </li>


    colaFactory(data) {
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            this.itemList.appendChild(item);
        });
    }
}

export default ColaGenerator;