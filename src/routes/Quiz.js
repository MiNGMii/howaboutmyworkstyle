import React, { useState, useEffect } from "react";
import { dbService } from "../fbase";
import { useHistory } from "react-router-dom";

const Quiz = ({typeObj, setTypeObj}) => {
    let history = useHistory();

    const[questionNo, setQuestionNo] = useState("1");
    const[question1, setQuestion1] = useState({text: ""});
    const[question2, setQuestion2] = useState({text: ""});

    useEffect(() => {
        console.log(typeObj);

        if (typeObj.questionNo > 20) {
            history.push('/result')
        } else {
            setQuestionNo(typeObj.questionNo.toString());
        }
    }, [typeObj])

    useEffect(() => {
        dbService.collection("questions")
            .where("quizNo", "==", questionNo)
            .orderBy("typeNo", "asc")
            .get()
            .then((querySnapshot) => {
                const questionArray = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                
                setQuestion1(questionArray[0]);
                setQuestion2(questionArray[1]);
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }, [questionNo]);

    const onBtnClick = async (event) => {
        let questionObj = event.target.name == 'question1' ? question1 : question2;

        let qNo = typeObj.questionNo + 1;
        let typeNm = typeObj.typeState;
        let typePoint = Number(typeObj[`${typeNm}`]) + Number(questionObj.point);
        let typeSt = qNo == 6 ? 'NS' : qNo == 11 ? 'FT' : qNo == 16 ? 'PJ' : typeNm;

        setTypeObj({
            ...typeObj,
            typeState: typeSt,
            questionNo: qNo,
            [typeNm]: typePoint,
        });
    }

    return (
        <div>
            <h3>Quiz{questionNo}</h3>
            <button onClick={onBtnClick} name="question1">{question1.text}</button>
            <button onClick={onBtnClick} name="question2">{question2.text}</button>
        </div>
    )
}

export default Quiz;