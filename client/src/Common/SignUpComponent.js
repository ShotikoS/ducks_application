import React, {Fragment} from "react";

const SignUpComponent = ({stepSetter, currentStep}) => {
    return (
        <Fragment>
            <div className="sign-up-head">
                <h1 className="application-title">Junior Ducks Application</h1>
                <button className="apply-app-btn" onClick={() => stepSetter(currentStep + 1)}>Apply in 35 Seconds</button>
            </div>
            <div className="how-it-works-banner">
                <h2 className="color-white" style={{fontSize: "28px", marginBottom: "15px"}}>How It Works</h2>
                <p style={{color: "#8997A1", marginBottom: "48px", fontSize: "14px", textAlign: "center"}}>A simple & secure way for people to get access to the most <br /> exciting mints - based on merit.</p>
                <div className="steps-list">
                    <ul className="steps-on-main-page">
                        <li>
                            <p className="step-num">1</p>
                            <p className="color-white step-title">Connect wallet</p>
                            <p className="steps-description">Your Solana wallet will be your user profile. <br />
                                If accepted, we will whitelist this address.</p>
                        </li>
                    </ul>
                    <ul className="steps-on-main-page">
                        <li>
                            <p className="step-num">2</p>
                            <p className="color-white step-title">Verify Your Twitter Profile</p>
                            <p className="steps-description">You connect your Twitter Profile to verify <br/>
                                your identity.</p>
                        </li>
                    </ul>
                    <ul className="steps-on-main-page">
                        <li>
                            <p className="step-num">3</p>
                            <p className="color-white step-title">Answer a few questions</p>
                            <p className="steps-description">Choose which category you fit in. Answer a <br /> few questions about yourself.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUpComponent