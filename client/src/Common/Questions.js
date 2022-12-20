import React, {useState} from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg"

const ConnectWallet = ({stepsSetter, currentStep, setData}) => {
    const [answer, setAnswer] = useState("");
    return (<div className="connect-wallet-step-container">
        <div className="back">
            <button className="back-icon" onClick={() => stepsSetter(currentStep - 1)}>
                <img src={back} alt="back"/>
            </button>
            <p>Back</p>
        </div>
        <div className="connect-wallet-block" style={{height: "632px"}}>
            <ul className="show-progress">
                <li>
                    <div className={currentStep >= 2 ? "each-step active" : "each-step"}>{currentStep >= 3 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title active-text">Wallet</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 3 ? "each-step active" : "each-step"}>{currentStep >= 4 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Social</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 4 ? "each-step active" : "each-step"}>{currentStep >= 5 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Categories</p>
                </li>
                <div className="hr-line"></div>
                <li>
                    <div className={currentStep >= 5 ? "each-step active" : "each-step"}>{currentStep >= 6 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Questions</p>
                </li>
            </ul>
            <p className="question-count">Question 1 of 3</p>
            <p className="block-title" style={{marginTop: "16px"}}>What are you currently working on?</p>
            <p className="block-sub-title">Share what you're building & what your role in it is..</p>

            <div className="flex-box-main">
                <textarea
                    className="answers-text-box"
                    placeholder="Start typing here"
                    onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
            <div className="questions-actions-button">
                <button className="questions-back" onClick={() => stepsSetter(currentStep - 1)}>Back</button>
                <button className="questions-next" onClick={() => {
                    setData((prev) => {
                        return {...prev, questions: answer}
                    })
                    stepsSetter(currentStep + 1)
                }}>Next</button>
            </div>
        </div>
    </div>)
}

export default ConnectWallet