import React, {useState} from "react";
import back from '../icons/24.svg';
import done from "../icons/32.svg"

const AddLinks = ({stepsSetter, currentStep, setData}) => {

    const [links, setLinks] = useState([{id: 30, text: ""}]);

    console.log(links)

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
                    <div className={currentStep >= 5 ? "each-step active" : "each-step"}>{currentStep >= 7 &&
                        <img src={done}
                             alt="done"/>}</div>
                    <p className="each-step-title">Questions</p>
                </li>
            </ul>
            <p className="question-count">Question 1 of 1</p>
            <p className="block-title" style={{marginTop: "16px"}}>Proof of work</p>
            <p className="block-sub-title">Share link to our social media profile.</p>

            <div className="flex-box-main flex-box-main-add-link">
                {
                    links.map((link, k) => {
                        return (
                            <div className="link-input" key={link.id}>
                                <label className="form-label" style={{marginBottom: "8px"}}>Link {k + 1}</label>
                                <input type="text" className="form-field" style={{marginTop: "8px"}} onChange={
                                    (e) => {
                                        const val = e.target.value;
                                        setLinks((prevState) => {
                                            const changedArray = prevState.map((changedLink) => {
                                                if(changedLink.id === link.id)  return {id: changedLink.id, text: val}
                                                return  changedLink
                                            })

                                            return changedArray
                                        })
                                    }
                                } placeholder="Share link"/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="add-link-actions-button">
                <button className="add-link-btn" onClick={
                    () => {
                        setLinks((prevState) => {
                            const nextId = links.length + 30;
                            return [...prevState, {id: nextId, text: ""}]
                        })
                    }
                }>Add link</button>
                <button className="questions-next" onClick={() => {
                    setData((prev) => {
                        return {...prev, links: JSON.stringify(links)}
                    })
                    stepsSetter(currentStep + 1)
                }}>Send</button>
            </div>
        </div>
    </div>)
}

export default AddLinks