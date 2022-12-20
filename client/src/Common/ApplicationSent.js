import React, {useEffect} from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg";
import banner from '../icons/cong-bg.png'
import ducks from '../icons/ducks.png'
import axios from "axios";

const ApplicationSend = ({stepsSetter, currentStep, Data}) => {

    useEffect(() => {
        axios.post("/application/create", Data, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        }).then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (<div className="connect-wallet-step-container">
        <div className="back">
            <button className="back-icon" onClick={() => stepsSetter(currentStep - 1)}>
                <img src={back} alt="back"/>
            </button>
            <p>Back</p>
        </div>
        <div className="connect-wallet-block" style={{height: "630px"}}>
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
            <div className="congratulation-banner">
                <img src={banner} alt="banner" className="banner-image-cong"/>
                <img src={ducks} alt="ducks" className="finish-duck-image"/>
            </div>
            <div className="congratulation-text">
                <p className="cong-head">Congrats @hidden</p>
                <p className="cong-sub-text">Your application has been submitted!</p>
                <button className="check-status-cong" onClick={() => stepsSetter(10)}>Check Status</button>
                <a href="/" className="go-to-home-page">Homepage</a>
            </div>
        </div>
    </div>)
}

export default ApplicationSend