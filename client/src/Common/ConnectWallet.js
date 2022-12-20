import React, {useEffect} from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg"
import WalletAdapter from "../Components/WalletAdapter/WalletAdapter";
import {useSelector} from "react-redux";

const ConnectWallet = ({stepsSetter, currentStep, setData}) => {

    const walletIsSelected = useSelector((state) => state.GlobalVariables.walletSelected);
    const walletAddress = useSelector((state) => state.GlobalVariables.walletAddress)

    useEffect(() => {
        if(walletIsSelected) stepsSetter(currentStep + 1);
        setData((prev) => {
            return {...prev, walletAddress: walletAddress}
        })
    }, [walletIsSelected])

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
                <p className="block-title">Start Your Application</p>
                <p className="block-sub-title">Create your account using your Solana wallet.</p>

                <div className="flex-box-main" style={{height: "fit-content !important"}}>
                    <WalletAdapter />
                    {/*<button className="connect-wallet-button" onClick={() => stepsSetter(currentStep + 1)}>Connect SOL Wallet</button>*/}
                </div>
            </div>
        </div>)
}

export default ConnectWallet