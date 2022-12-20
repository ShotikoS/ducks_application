import React, {useEffect, useState} from "react";
import back from '../icons/24.svg';
import WalletAdapter from "../Components/WalletAdapter/WalletAdapter";
import {useSelector} from "react-redux";
import axios from "axios";

const ConnectWallet = ({stepsSetter}) => {

    const walletIsSelected = useSelector((state) => state.GlobalVariables.walletSelected);
    const walletAddress = useSelector((state) => state.GlobalVariables.walletAddress);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if(walletIsSelected){
            axios.get(`/application?wallet=${walletAddress}`)
                .then((response) => {
                    const getStatus = response.data.status;
                    setStatus(getStatus);
                })
                .catch(() => {

                })
        }
    }, [walletIsSelected])

    return (<div className="connect-wallet-step-container">
        <div className="back">
            <button className="back-icon" onClick={() => stepsSetter(1)}>
                <img src={back} alt="back"/>
            </button>
            <p>Back</p>
        </div>
        <div className="connect-wallet-block">
            <p className="block-title">Application Status</p>
            <p className="block-sub-title">Connect your wallet to see the latest on your application.</p>

            <div className="flex-box-main-check-status" style={{height: "fit-content !important"}}>
                <WalletAdapter />
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "48px"}}>
                <p className="status-title">Status</p>
                <p className="show-status">{status}</p>
            </div>
        </div>
    </div>)
}

export default ConnectWallet