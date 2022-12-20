import React from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg";
import tweet from "../icons/tweet.png";

const LinkTwiter = ({stepsSetter, currentStep}) => {
    return (<div className="connect-wallet-step-container">
        <div className="back">
            <button className="back-icon" onClick={() => stepsSetter(currentStep - 1)}>
                <img src={back} alt="back"/>
            </button>
            <p>Back</p>
        </div>
        <div className="connect-wallet-block">
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
            <p className="block-title">Are you a human?</p>
            <p className="block-sub-title">We're only requesting access to verify your username. You can <br/> revoke at anytime..</p>

            <div className="flex-box-main">
                <button className="connect-twitter-button" onClick={() => stepsSetter(currentStep + 1)}><img src={tweet} className="btn-icon" alt="twetter" /> Verify with Twitter</button>
            </div>
        </div>
    </div>)
}

export default LinkTwiter