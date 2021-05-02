import { useHistory } from "react-router-dom"

const Main = () => {
    let history = useHistory();

    const onStartBtnClick = async (event) => {
        event.preventDefault();
        history.push('/quiz')
    }

    return (
        <div>
            <h3>나의 업무 스타일 테스트</h3>
            <p>Created by mingmii</p>
            <button onClick={onStartBtnClick} name="start">시작하기</button>
        </div>
    )
}

export default Main;