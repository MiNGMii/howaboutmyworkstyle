import React from "react";

const Quiz = ({typeObj, setTypeObj}) => {
    return (
        <>
            <div>Quiz</div>
            <div>
            {typeObj ? `${typeObj.questionNo}` : '' }
            </div>
        </>
    )
}

export default Quiz;