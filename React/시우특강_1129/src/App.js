import { useEffect, useState } from "react";

function App() {
    console.log("App 함수 실행됨");

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const onButtonClick = () => {
        setCounter((prev) => prev + 1);
        setCounter2((이전값) => 이전값 + 2);
    };
    const onButton2Click = () => {
        setCounter2((이전값) => 이전값 + 2);
    };

    useEffect(() => {
        console.log("counter 보고있는 useEffct 실행");
        if (counter === 0) {
            return;
        }
        alert(counter + " " + counter2);
    }, [counter, counter2]);

    useEffect(() => {
        console.log("안녕");
    }, []);

    return (
        <div>
            {counter}
            <button type="button" onClick={onButtonClick}>
                버튼
            </button>
            <button type="button" onClick={onButton2Click}>
                버튼2
            </button>
        </div>
    );
}

export default App;
