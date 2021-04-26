import { useHistory } from "react-router-dom"

const Main = ({setTypeObj}) => {
    let history = useHistory();

    const onStartBtnClick = async (event) => {
        setTypeObj({
            typeState: '',
            questionNo: 1,
            IE: 0,
            NS: 0,
            FT: 0,
            PJ: 0,
        });
        
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